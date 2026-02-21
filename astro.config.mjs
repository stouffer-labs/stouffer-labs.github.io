// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://stouffer-labs.github.io',
	integrations: [
		starlight({
			title: 'stouffer-labs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/stouffer-labs' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/eric-stouffer/' },
			],
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
