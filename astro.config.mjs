import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: deno(),
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		preact(),
	],
});
