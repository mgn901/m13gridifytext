import * as esbuild from 'esbuild';
import inlineWorkerPlugin from 'esbuild-plugin-inline-worker';
import stylePlugin from 'esbuild-style-plugin';
import tailwindcss from 'tailwindcss';
const tailwindConfig = require('../tailwind.config.js');
const autoprefiexer = require('autoprefixer');
const copyPlugin = require('esbuild-copy-static-files');
const packageJSON = require('../package.json');

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const APP_VERSION = process.env.APP_VERSION ?? packageJSON.version as string ?? '1.0.0';
const isDev = NODE_ENV === 'development';
const outDir = NODE_ENV;

const optionsClient: esbuild.BuildOptions = {
	entryPoints: [
		'src/client/index.tsx',
		// 'src/serviceWorker.ts',
	],
	outdir: `${outDir}`,
	assetNames: 'assets/[name]',
	loader: {
		'.woff': 'file',
		'.woff2': 'file',
	},
	bundle: true,
	define: {
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
		'process.env.APP_VERSION': JSON.stringify(APP_VERSION),
	},
	minify: !isDev,
	sourcemap: isDev,
	tsconfig: 'tsconfig.client.json',
	target: ['chrome98', 'firefox97', 'edge98', 'safari14'],
	plugins: [
		inlineWorkerPlugin(),
		stylePlugin({
			postcss: {
				plugins: [tailwindcss(tailwindConfig), autoprefiexer()],
			},
		}),
		copyPlugin({
			src: 'src/client/static',
			dest: `${outDir}/client`,
		}),
	],
};

const optionsServer: esbuild.BuildOptions = {
	entryPoints: [
		'src/server/index.ts',
	],
	outdir: `${outDir}/server`,
	platform: 'node',
	bundle: true,
	define: {
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
	},
	minify: !isDev,
	sourcemap: isDev,
	tsconfig: 'tsconfig.server.json',
	target: ['node18'],
}

const start = () => {
	const contextClient = esbuild.build(optionsClient);
	const contextServer = esbuild.build(optionsServer);
	return;
}

start();
