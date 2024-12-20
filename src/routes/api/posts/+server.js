// // src/routes/api/posts/index.js

// // Fetch posts from the Payload CMS server
// export async function get() {
// 	try {
// 		// Replace this with your Payload CMS API URL
// 		const url = 'http://localhost:3000/api/posts';
// 		const res = await fetch(url);

// 		// Parse the response JSON
// 		const data = await res.json();

// 		// Return posts if the request was successful
// 		if (res.ok) {
// 			return {
// 				status: 200,
// 				body: data.docs, // Only return the `docs` array
// 			};
// 		}

// 		// Handle errors from the Payload CMS API
// 		return {
// 			status: res.status,
// 			body: { message: 'Failed to fetch posts from Payload CMS' },
// 		};
// 	} catch (error) {
// 		// Handle unexpected errors
// 		return {
// 			status: 500,
// 			body: { 
// 				message: 'Error fetching posts', 
// 				error: error.message, 
// 			},
// 		};
// 	}
// }

// src/routes/api/posts/+server.js
import { json } from '@sveltejs/kit';

const PAYLOAD_API_URL = 'http://localhost:3000/api';
const PAYLOAD_API_SECRET = process.env.PAYLOAD_API_SECRET; // Store your secret in .env

export const GET = async () => {
	try {
		const res = await fetch(`${PAYLOAD_API_URL}/posts?limit=10&sort=-publishedAt`, {
			headers: { Authorization: `Bearer ${PAYLOAD_API_SECRET}` }
		});
		
		if (!res.ok) throw new Error('Failed to fetch posts');
		
		const data = await res.json();
		const [latestPost, ...otherPosts] = data.docs;
		
		return json({ latestPost, otherPosts });
	} catch (err) {
		console.error('Error fetching posts:', err);
		return json({ error: 'Unable to fetch posts' }, { status: 500 });
	}
};