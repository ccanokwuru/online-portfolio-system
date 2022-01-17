import { IUserUpdate, IRole, IRoleBody } from './../../interface';
import { PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";
import { IOneRef, ISignin, ISignup } from "../../interface";
// import * as crypto from "crypto";

const prisma = new PrismaClient();
const userRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: ISignup }>("/signup", async function (request, reply) {
    const { email, password, confirm, display_name } = request.body;
    if (!email.length || !password.length || !confirm.length || !display_name.length)
      return reply.code(401).send({ msg: "missing fields" });
    if (password !== confirm)
      return reply.code(401).send({ msg: "passwords do not match" });

    const hash = await fastify.bcrypt.hash(password);

    const result = await prisma.user.create({
      data: {
        display_name,
        email,
        password: hash,
      },
    });

    if (!result) return reply.code(409).send({ msg: "user already exits" });

    const userInfo = {
      name: result.display_name,
      email: result.email,
      role: result.role
    };

    const token = fastify.jwt.sign(userInfo);
    reply.code(201).setCookie("token", token, {
      httpOnly: true,
      path: "/",
      signed: true,
    });
    return {
      result
    };
  });

  fastify.post<{ Body: ISignin }>("/signin", async function (request, reply) {
    const { email, password } = request.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) return reply.code(401).send({ msg: "user not found" });

    const match = await fastify.bcrypt.compare(password, user?.password);

    if (!match) {
      return reply.code(401).send({ msg: "email or password is wrong" });
    }
    const userInfo = {
      name: user.display_name,
      email: user.email,
      role: user.role
    };
    const token = fastify.jwt.sign(userInfo);

    reply.code(200).setCookie("token", token, {
      httpOnly: true,
      signed: true,
    });

    return {
      user
    };
  });

  fastify.post("/signout", async function (request, reply) {
    reply.clearCookie("token");

    return {
      msg: "Logout Successful",
    };
  });

  fastify.get("s", async function (request, reply) {
    const users = await prisma.user.findMany();

    if (!users) return reply.code(404).send({ msg: "users not found" });


    return reply.send(users);
  });

  fastify.get<{ Params: IOneRef }>("/u/:ref", async function (request, reply) {

    const { ref } = request.params;

    const user = await prisma.user.findUnique({
      where: {
        ref,
      },
      include: {
        interests: true,
        contacts: true,
        creator: true,
        admin: true,
        reviews: true,
        posts: true,
        comments: true,
        sentMessage: true,
        recievedMessage: true,
        jobs: true,
        orders: true,
        wishlist: true,

      }
    });

    if (!user) return reply.code(404).send({ msg: "user not found" });

    return reply.send({
      user
    });
  });

  fastify.post<{ Params: IOneRef, Body: IUserUpdate }>("/u/:ref/update", async function (request, reply) {

    const { ref } = request.params;
    const { email, display_name, first_name, last_name, other_name } = request.body

    if (!email?.length || !display_name?.length || !first_name?.length || !last_name?.length || !other_name?.length)
      return reply.code(401).send({ msg: "missing fields" });

    const user = await prisma.user.update({
      where: {
        ref,
      },
      data: {
        email, display_name, first_name, last_name, other_name,
      },
    });

    if (!user) return reply.code(404).send({ msg: "user not found" });

    return reply.send({
      user
    });
  });

  fastify.post<{ Params: IOneRef, Body: IRoleBody }>("/u/:ref/assign-role", async function (request, reply) {

    const { ref } = request.params;
    const { role } = request.body

    if (!role.length && role !== IRole.adm && role !== IRole.crt && role !== IRole.col)
      return reply.status(403).send({ msg: "invalid role" })

    const user = await prisma.user.update({
      where: {
        ref,
      },
      data: {
        role
      },
    });

    if (role === IRole.crt) {
      const crt = await prisma.creator.create({
        data: {
          userId: user.id,
        }
      })
      if (!crt)
        return reply.code(401).send({ msg: "creator account activation failed" });

      const creator = await prisma.user.findUnique({
        where: {
          ref
        },
        include: {
          creator: true,
        },
      })
      return reply.status(201).send({
        creator
      })
    }

    if (role === IRole.adm) {
      const adm = await prisma.admin.create({
        data: {
          userId: user.id,
        }
      })
      if (!adm)
        return reply.code(401).send({ msg: "creator account activation failed" });

      const admin = await prisma.user.findUnique({
        where: {
          ref
        },
        include: {
          admin: true,
        }
      })
      return reply.status(201).send({
        admin
      })
    }

    if (!user) return reply.code(404).send({ msg: "user not found" });

    return reply.send({
      user
    });
  });
};

export default userRoute;
