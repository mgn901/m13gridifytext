import { FastifyPluginAsync } from 'fastify';
import { staticRoute } from './static/static.route';

export const router: FastifyPluginAsync = async(instance, options) => {
	instance.register(staticRoute);
}
