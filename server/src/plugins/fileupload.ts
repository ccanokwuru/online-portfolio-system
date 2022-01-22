import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import multer from 'fastify-multer';

const setPath = (routerPath: String) => {
  return `../uploads/${routerPath.split('/')[1]}/`
}

module.exports = fp(async function (fastify, opts) {

  fastify.register(multer.contentParser);

  fastify.decorate("upload_single", async (request: FastifyRequest, reply: FastifyReply) => {
    const { url } = request

    console.log(url)
    const path = setPath(url)
    const upload = multer({ dest: path })
    // @ts-ignore
    const file = request.body.file

    if (file) {
      upload.single(file)
    }
    // @ts-ignore
    request.uploadPath = path
  })

  fastify.decorate("upload_multi", async (request: FastifyRequest, reply: FastifyReply) => {
    const { routerPath } = request

    console.log(routerPath)
    const path = setPath(routerPath)
    const upload = multer({ dest: path })
    // @ts-ignore
    const files = request.body.file

    if (files) {
      upload.array(files)
    }
    // @ts-ignore
    request.uploadPath = path
  })
})


