/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'backgroundImage': {
				'main-desktop': 'url(/assets/home/background-home-desktop.jpg)',
				'main-mobile': 'url(/assets/home/background-home-mobile.jpg)'
			}
		},
	},
	plugins: [],
}
