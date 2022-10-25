import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	ssr: {
		noExternal: "@vespaiach/axios-fetch-adapter",
	},
	plugins: [sveltekit()]
};

export default config;
