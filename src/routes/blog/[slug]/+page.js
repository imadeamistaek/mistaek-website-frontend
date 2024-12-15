// src/routes/blog/+page.js
export async function load({ params, fetch }) {
	const { slug } = params;

	try {
		// Step 1: Fetch all posts to find the post with the matching slug
		const res = await fetch('http://localhost:3000/api/posts');
		if (!res.ok) {
			throw new Error('Failed to fetch posts');
		}

		const data = await res.json();

		// Find the post ID corresponding to the slug
		const postSummary = data.docs.find(post => post.slug === slug);
		if (!postSummary) {
			return {
				status: 404,
				error: new Error('Post not found'),
			};
		}

		// Step 2: Fetch the post details by ID
		const postRes = await fetch(`http://localhost:3000/api/posts/${postSummary.id}`);
		if (!postRes.ok) {
			throw new Error('Failed to fetch post details');
		}

		const post = await postRes.json();
		return { post };
	} catch (error) {
		console.error('Error in load function:', error);
		return {
			status: 500,
			error: new Error('Failed to load post'),
		};
	}
}