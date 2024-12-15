// src/routes/api/posts/[slug].js

export async function get({ params }) {
	const { slug } = params; // `slug` is the dynamic part of the URL

	try {
		// Replace with your Payload CMS API URL
		const url = `http://localhost:3000/api/posts/${slug}`;
		const res = await fetch(url);

		// Handle successful response
		if (res.ok) {
			const post = await res.json();
			return {
				status: 200,
				body: post,
			};
		}

		// Handle not found (404)
		return {
			status: 404,
			body: { message: 'Post not found' },
		};
	} catch (error) {
		// Handle unexpected errors
		return {
			status: 500,
			body: {
				message: 'Error fetching post',
				error: error.message,
			},
		};
	}
}