import { FastifyPluginAsync } from "fastify"

const payment: FastifyPluginAsync =async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an payment'
  })
}

export default payment;
