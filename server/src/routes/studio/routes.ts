// import { IUserUpdate, IRole, IRoleBody } from './../../interface';
// import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";
// import { IOneUserParams, ISignin, ISignup } from "../../interface";
// import * as crypto from "crypto";

// const prisma = new PrismaClient();
const studio: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post("/create", async function (request, reply) {

    return {
      studio: true
    };
  });
  fastify.get("/", async function (request, reply) {

    return {
      studio: true
    };
  });
};

export default studio;
