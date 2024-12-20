
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
		
		// Step 2: Find the post with the matching slug
		const postSummary = data.docs.find(post => post.slug === slug);
		if (!postSummary) {
			return {
				status: 404,
				error: new Error('Post not found'),
			};
		}
		
		// Step 3: Fetch the post details
		const postRes = await fetch(`http://localhost:3000/api/posts/${postSummary.id}`);
		if (!postRes.ok) {
			throw new Error('Failed to fetch post details');
		}
		
		const post = await postRes.json();

		// Step 4: Extract author details from the post
		let author = null;
		if (post.authors && post.authors.length > 0) {
			const authorData = post.authors[0]; // Assuming the first author is the main one

			const { name, photo, role } = authorData;

			// Extract the photo URL if available
			const photoUrl = photo ? `${import.meta.env.VITE_API_URL}${photo.url}` : null;

			// Prepare author details
			author = {
				name: name || 'Unknown Author', // Default to 'Unknown Author' if name is missing
				role: role || 'Unknown Role', // Default to 'Unknown Role' if name is missing
				photo: photoUrl,
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