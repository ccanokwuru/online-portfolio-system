import { ICategory, IOneId } from './../../interface';
import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";

const prisma = new PrismaClient();
const categoriesRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: ICategory }>("/create", {
    preHandler: fastify.auth([
      // @ts-ignore
      fastify.authenticate, fastify.admin_auth
    ], { run: 'all' })
  }, async function (request, reply) {
    console.log(request.body)
    const { name, p_categoryId, description } = request.body

    const categoryCreate = await prisma.category.create({
      data: {
        description,
        name,
      },
      include: {
        p_category: true
      }
    });
    if (p_categoryId && categoryCreate) {
      const category = await prisma.category.update({
        where: {
          id: Number(categoryCreate.id)
        },
        data: {
          p_category: {
            connect: {
              id: Number(p_categoryId)
            }
          }
        },
        include: {
          p_category: true
        }
      });
      return {
        category
      };
    }
    return {
      categoryCreate
    };
  });

  fastify.get("/all", async function (request, reply) {

    const categories = await prisma.category.findMany({
      include: {
        works: true,
        skills: true,
        jobs: true
      }
    })

    return {
      categories
    };
  });

  fastify.get<{ Params: IOneId }>("/w/:id", async function (request, reply) {
    const { id } = request.params
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
      include: {
        works: true
      }
    })

    return {
      category
    };
  });

  fastify.post<{ Body: ICategory, Params: IOneId }>("/w/:id/update", {
    preHandler: fastify.auth([
      // @ts-ignore
      fastify.authenticate, fastify.current_userId
    ])
  }, async function (request, reply) {
    const { name, description, p_categoryId } = request.body
    const { id } = request.params

    const category = await prisma.category.update({
      where: {
        id
      },
      data: {
        description,
        name,
        p_category: {
          connect: {
            id: Number(p_categoryId)
          }
        }
      }, include: {
        works: true,
        skills: true,
        jobs: true
      }
    });
    return {
      category
    };
  });

  fastify.post<{ Params: IOneId }>("/delete",
    {
      preHandler: fastify.auth([
        // @ts-ignore
        fastify.authenticate, fastify.admin_auth
      ])
    }, async function (request, reply) {
      const { id } = request.params

      const category = await prisma.category.delete({
        where: {
          id
        },
      })


      return {
        category
      };
    });
};

export default categoriesRoute;
