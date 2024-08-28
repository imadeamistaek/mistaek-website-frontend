import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

export default {
    kit: {
        adapter: adapter(),
        // Other SvelteKit configurations
    },

    preprocess: preprocess({
        scss: {
            prependData: `
                @import '${path.resolve('src/lib/styles/primitives.scss')}';
            `,
        },
    }),
};