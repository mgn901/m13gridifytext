import fastifyStatic from '@fastify/static';
import { FastifyPluginAsync } from 'fastify';
import path from 'path';
import { setCacheControl } from '../plugins/setCacheControl';

export const staticRoute: FastifyPluginAsync = async (instance, options) => {

	instance.addHook('preHandler', setCacheControl);

	instance.register(fastifyStatic, {
		root: path.join(__dirname, '../', 'client'),
		prefix: '/',
	});

	instance.get('/', (req, rep) => {
		return rep.sendFile('index.html');
	});

}
