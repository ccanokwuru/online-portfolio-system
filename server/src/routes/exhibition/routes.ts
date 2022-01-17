
import { IExhibition, IOneId, IOneRef } from './../../interface';
import { Prisma, PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";

const prisma = new PrismaClient();
const studio: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: IExhibition, files: any[] }>("/create", async function (request, reply) {
    const {
      currency,
      creatorId,
      description,
      workId,
      sellAs,
      price,
      categoryId,
      studioId,
      title
    } = request.body

    let exhibition;

    if (workId) {
      exhibition = await prisma.exhibition.create({
        data: {
          currency,
          creatorId,
          workId,
          description,
          sellAs,
          price
        }
      });
    }
    else if (title && categoryId) {
      const work: Prisma.WorkCreateInput = {
        categoryId,
        studioId,
        creatorId,
        description,
        title,
      };

      exhibition = await prisma.exhibition.create({
        data: {
          currency,
          creatorId,
          description,
          sellAs,
          price,
          work: {
            create: work,
          },
        }
      });
    }
    if (!exhibition) return reply.code(409).send({ msg: "users not found" });

    return exhibition
  });

  fastify.get("/all", async function (request, reply) {

    const exhibitions = await prisma.studio.findMany({
      include: {
        works: true,
      }
    })

    if (!exhibitions) return reply.code(404).send({ msg: "users not found" });

    return exhibitions
  });

  fastify.get<{ Params: IOneRef }>("/e/:ref", async function (request, reply) {
    const { ref } = request.params
    const exhibition = await prisma.studio.findUnique({
      where: {
        ref,
      }
    })

    if (!exhibition) return reply.code(404).send({ msg: "users not found" });

    return exhibition
  });

  fastify.post<{ Body: IExhibition, files: any[], Params: IOneRef }>("/update", async function (request, reply) {

  });

  fastify.post<{ Body: IOneRef }>("/delete", async function (request, reply) {
    const { ref } = request.body

    const exhibition = await prisma.exhibition.delete({
      where: {
        ref
      },
    });

    if (!exhibition) return reply.code(404).send({ msg: "users not found" });

    return exhibition
  });
};

export default studio;
