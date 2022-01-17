import { IOneRef, IStudio } from './../../interface';
import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";

const prisma = new PrismaClient();
const studio: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: IStudio, files: any[] }>("/create", async function (request, reply) {
    const { name, creatorId, description } = request.body


    const studio = await prisma.studio.create({
      data: {
        name,
        creatorId,
        description
      }
    });
    if (!studio) return reply.code(409).send({ msg: "users not found" });

    return studio
  });

  fastify.get("/all", async function (request, reply) {

    const studios = await prisma.studio.findMany()

    if (!studios) return reply.code(404).send({ msg: "users not found" });

    return studios
  });

  fastify.get<{ Params: IOneRef }>("/s/:ref", async function (request, reply) {
    const { ref } = request.params
    const studio = await prisma.studio.findUnique({
      where: {
        ref,
      }
    })

    if (!studio) return reply.code(404).send({ msg: "users not found" });

    return studio
  });

  fastify.post<{ Body: IStudio, files: any[], Params: IOneRef }>("/update", async function (request, reply) {

  });

  fastify.post<{ Body: IOneRef }>("/delete", async function (request, reply) {
    const { ref } = request.body

    const studio = await prisma.studio.delete({
      where: {
        ref
      },
    });

    if (!studio) return reply.code(404).send({ msg: "users not found" });

    return studio
  });
};

export default studio;
