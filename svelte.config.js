import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path';

export default {
    kit: {
        adapter: adapter(),
    },

    preprocess: preprocess({
        scss: {
            prependData: `
                @import '${path.resolve('src/lib/styles/primitives.scss')}';
            `,
        },
    }),
};