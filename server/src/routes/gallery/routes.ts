import { FastifyPluginAsync } from "fastify"

const gallery: FastifyPluginAsync =async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an gallery'
  })
}

export default gallery;
