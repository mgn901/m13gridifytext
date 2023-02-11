import { preHandlerAsyncHookHandler } from 'fastify'

export const setCacheControl: preHandlerAsyncHookHandler = async (req, rep) => {
	rep.header('Cache-Control', 'must-revalidate, max-age=0');
}
