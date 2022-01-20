import { PrismaClient } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

const prisma = new PrismaClient();

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { token } = request.cookies
      const { authorization } = request.headers
      const userToken = authorization?.startsWith('Bearer ') ? authorization.split(' ')[1] : token

      if (!userToken)
        return reply.code(401).send({ msg: "requires authentication" })

      const user = fastify.jwt.verify(userToken)

      const authToken = await prisma.token.findFirst({
        where: {
          token: userToken
        }
      })

      if (!authToken) return reply.code(401).send({ msg: "invalid session token" });

      // @ts-ignore
      const over = new Date(authToken.createdAt).getTime() < new Date(Date.now()).getTime() - (3600000 * 24)

      if (over) {
        await prisma.token.update({
          where: {
            token,
          },
          data: { expired: true }
        })
        return reply.code(401).send({ msg: "session expired" });
      }

      const expired = authToken.expired
      if (expired) return reply.code(401).send({ msg: "session expired" });

      request.user = user
      // @ts-ignore
      request.token = userToken
    } catch (err) {
      return reply.code(401).send(err)
    }
  })

  fastify.decorate("creator_auth", (request: FastifyRequest, reply: FastifyReply) => {

    // @ts-ignore
    if (request.user.role === "collector") return reply.code(401).send({ msg: " you are not authorised for this" })
  })

  fastify.decorate("admin_auth", (request: FastifyRequest, reply: FastifyReply) => {

    // @ts-ignore
    if (request.user.role !== "admin") return reply.code(401).send({ msg: " you are not authorised for this" })
  })

  fastify.decorate("current_user", async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { id } = request.params
    // @ts-ignore
    const { userId } = request.body

    const user = await prisma.user.findUnique({
      where: {
        // @ts-ignore
        email: request.user.email
      }
    })

    // @ts-ignore
    if (user?.id !== id || user?.id !== userId) return reply.code(401).send({ msg: " you are not authorised for this" })
  })

  fastify.decorate("current_userId", async (request: FastifyRequest, reply: FastifyReply) => {
    // @ts-ignore
    const { userId, ownerId, creatorId, authorId } = request.body

    const user = await prisma.user.findUnique({
      where: {
        // @ts-ignore
        email: request.user.email
      }
    })

    // @ts-ignore
    if (
      user?.id !== userId,
      user?.id !== ownerId,
      user?.id !== creatorId,
      user?.id !== authorId
    ) return reply.code(401).send({ msg: " you are not authorised for this" })
  })
})

