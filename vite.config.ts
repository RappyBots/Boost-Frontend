import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT || "3000");
const host = process.env.HOST || '0.0.0.0';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		watch: {
			usePolling: true
		},
		port: port,
		host: host
	},
	preview: {
		port: port,
		host: host
	}
});
