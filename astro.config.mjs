// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://stouffer-labs.github.io',
	integrations: [
		starlight({
			title: 'Stouffer Labs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/stouffer-labs' }],
			sidebar: [
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
