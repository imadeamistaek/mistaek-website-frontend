export async function load({ params, fetch }) {
    const { slug } = params;
    const BASE_URL = import.meta.env.VITE_API_URL;

    try {
        // Directly fetch the post by its slug
        const res = await fetch(`${BASE_URL}/api/posts?where[slug][equals]=${slug}`);

        if (!res.ok) {
            throw new Error('Failed to fetch post by slug');
        }

        const data = await res.json();

        if (!data.docs.length) {
            return {
                status: 404,
                error: new Error('Post not found'),
            };
        }

        const post = data.docs[0]; // The matching post
        let author = null;

        // Extract author data if available
        if (post.populatedAuthors && post.populatedAuthors.length > 0) {
            const { name, role, photo } = post.populatedAuthors[0];
            author = {
                name: name || 'Unknown Author',
                role: role || 'Unknown Role',
                photo: photo?.url
                    ? `${BASE_URL}${photo.url}`
                    : null,
            };
        }

        return { post, author };
    } catch (error) {
        console.error('Error in load function:', error);
        return {
            status: 500,
            error: new Error('Failed to load post'),
        };
    }
}
