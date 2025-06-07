import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
// import content from './src/data.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getSlugs = () => {
	const file = readFileSync(path.join(__dirname, 'src/data.json'), 'utf-8');
	const fileJSON = JSON.parse(file)
	const entries = fileJSON.map((i) => "/" + i.path);
	return entries;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: ['/', ...getSlugs()]
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : '/artist-alley-cards',
		}
	}
};

export default config;
