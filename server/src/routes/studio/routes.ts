import { FastifyPluginAsync } from "fastify"

const studio: FastifyPluginAsync =async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an studio'
  })
}

export default studio;
