import { IWork, IOneRef } from './../../interface';
import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";

const prisma = new PrismaClient();
const worksRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: IWork, files: any[] }>("/create", async function (request, reply) {
    const { title, categoryId, description, studioId, creatorId } = request.body

    const images = JSON.stringify({})

    const work = await prisma.work.create({
      data: {
        categoryId,
        studioId,
        creatorId,
        description,
        title,
        images,
      }
    });
    return {
      work
    };
  });

  fastify.get("/", async function (request, reply) {

    const works = await prisma.work.findMany()

    return {
      works
    };
  });

  fastify.get<{ Params: IOneRef }>("/w/:ref", async function (request, reply) {
    const { ref } = request.params
    const work = await prisma.work.findUnique({
      where: {
        ref,
      }
    })

    return {
      work
    };
  });

  fastify.post<{ Body: IWork, files: any[], Params: IOneRef }>("/w/:ref/update", async function (request, reply) {
    const { title, categoryId, description, studioId, creatorId } = request.body
    const { ref } = request.params

    const images = JSON.stringify({})

    const work = await prisma.work.update({
      where: {
        ref
      },
      data: {
        categoryId,
        studioId,
        creatorId,
        description,
        title,
        images,
      }
    });
    return {
      work
    };
  });

  fastify.post<{ Params: IOneRef }>("/delete", async function (request, reply) {
    const { ref } = request.params

    const work = await prisma.work.delete({
      where: {
        ref
      },
    });

    return {
      work
    };
  });
};

export default worksRoute;
