import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: "@vespaiach/axios-fetch-adapter",
	},
};

export default config;
