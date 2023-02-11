import fastifyEtag from '@fastify/etag';
import fastifyHelmet from '@fastify/helmet';
import fastify from 'fastify';
import { router } from './route';

const instance = fastify({
	logger: true,
});

instance.register(fastifyEtag);
instance.register(fastifyHelmet, {
	contentSecurityPolicy: {
		directives: {
			// For inline worker's blob URL:
			'script-src': ['\'self\'', 'blob:'],
			'worker-src': ['\'self\'', 'blob:'],
		},
	},
});
instance.register(router);

const start = async () => {
	await instance.listen({ host: '0.0.0.0', port: 80 });
}

start().catch((err) => {
	instance.log.error(err);
});
