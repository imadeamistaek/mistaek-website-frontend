import { postsStore } from '$lib/stores/posts';

// src/routes/blog/+page.js
export async function load({ fetch }) {
	
	try {
		const res = await fetch('http://localhost:3000/api/posts');
		if (res.ok) {
			const data = await res.json();
			
			// Update the store with fetched posts
			postsStore.set(data.docs || []);
			
			// Return posts as props
			return {
				posts: data.docs || []
			};
		} else {
			console.error('Failed to fetch posts:', res.statusText);
		}
	} catch (error) {
		console.error('Error fetching posts:', error);
	}
	
	return { posts: [] };
}