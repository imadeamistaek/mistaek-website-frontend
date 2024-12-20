import { postsStore } from '$lib/stores/posts';

// src/routes/blog/+page.js
export async function load({ fetch }) {

	try {
		const res = await fetch('http://localhost:3000/api/posts');
		if (res.ok) {
			const data = await res.json();
			console.log(data);

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

	return { posts: [] }; // No need to return posts explicitly
}
// import { posts } from '$lib/stores/posts'; // Import the store

// export const load = async ({ fetch }) => {
// 	try {
// 		const response = await fetch('http://localhost:3000/api/posts');

// 		if (response.ok) {
// 			const data = await response.json();
			
// 			// Extracting the first post as latestPost and the rest as otherPosts
// 			const [latestPost, ...otherPosts] = data.docs;
			
// 			// Make sure to update the store with the data received from SSR
// 			posts.set({
// 				latestPost,
// 				otherPosts
// 			});
	
// 			// Return data for SSR
// 			return {
// 				latestPost,
// 				otherPosts
// 			};
// 		} else {
// 			console.error('Failed to fetch posts:', response.statusText);
// 		}

// 	} catch (error) {
// 		console.error('Failed to fetch data:', error);
// 		return {
// 			latestPost: null,
// 			otherPosts: []
// 		};
// 	}
// };