import { Prisma, PrismaClient } from "@prisma/client";
import { FastifyPluginAsync } from "fastify";
import { IAdmin, ISignin, ISignup } from "../../interface";
import * as crypto from "crypto";

const prisma = new PrismaClient();
const userRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: ISignup }>("/register", async function (request, reply) {
    const { email, password, confirm, display_name } = request.body;
    if (!email.length || !password.length || !confirm.length || !display_name.length)
      return reply.code(401).send({ msg: "missing fields" });
    if (password !== confirm)
      return reply.code(401).send({ msg: "passwords do not match" });

    const hash = await fastify.bcrypt.hash(password);

    const ref = `${crypto.randomBytes(5).toString("hex")}${Math.floor(
      Math.random() * 10
    ).toString(16)}`;

    const result = await prisma.user.create({
      data: {
        ref,
        display_name,
        email,
        password: hash,
        interests: undefined,
        contacts: undefined,
        favourites: undefined,
        badges: undefined,
        reviews: undefined,
        posts: undefined,
        comments: undefined,
        sentMessage: undefined,
        recievedMessage: undefined,
        sessions: undefined,
      },
    });

    if (!result) return reply.code(409).send({ msg: "user already exits" });

    const userInfo = {
      name: result.display_name,
      email: result.email,
    };

    const token = fastify.jwt.sign(userInfo);
    reply.code(201).setCookie("token", token, {
      httpOnly: true,
      path: "/",
      signed: true,
    });
    return {
      user: userInfo,
    };
  });

  fastify.post<{ Body: ISignin }>("/login", async function (request, reply) {
    const { email, password } = request.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    //   if (!user) return reply.code(401).send({ msg: "user not found" });

    //   const match = await fastify.bcrypt.compare(password, user?.password);

    //   if (!match) {
    //     return reply.code(401).send({ msg: "email or password is wrong" });
    //   }
    //   const userInfo = {
    //     name: user.name,
    //     email: user.email,
    //   };
    //   const token = fastify.jwt.sign(userInfo);

    //   reply.code(200).setCookie("token", token, {
    //     httpOnly: true,
    //     signed: true,
    //   });

    //   return {
    //     user: userInfo,
    //   };
    // });

    // fastify.post("/logout", async function (request, reply) {
    //   reply.clearCookie("token");

    //   return {
    //     msg: "Logout Successful",
    //   };
  });

  fastify.get("/", async function (request, reply) {
    // const users = await prisma.user.findMany();

    // if (!users) return reply.code(404).send({ msg: "users not found" });

    // let allUsers: {
    //   id: number;
    //   name: string | null;
    //   email: string;
    // }[] = [];

    // users.forEach((user) => {
    //   const userInfo = {
    //     id: user.id,
    //     name: user.name,
    //     email: user.email,
    //   };

    //   allUsers.push(userInfo);
    // });

    // return reply.send(allUsers);
  });

  // fastify.get<{ Params: IUser }>("/:id", async function (request, reply) {
  //   const { uid } = request.params;

  //   const user = await prisma.user.findUnique({
  //     where: {
  //       id: uid,
  //     },
  //   });

  //   if (!user) return reply.code(404).send({ msg: "user not found" });

  //   return reply.send(user);
  // });
};

export default userRoute;
