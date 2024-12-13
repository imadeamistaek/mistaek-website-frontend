import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { configDotenv } from 'dotenv';

configDotenv();

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@styles': 'src/lib/styles',
		}
	}
});