// src/routes/api/posts/index.js

// Fetch posts from the Payload CMS server
export async function get() {
	try {
		// Replace this with your Payload CMS API URL
		const url = 'http://localhost:3000/api/posts';
		const res = await fetch(url);

		// Parse the response JSON
		const data = await res.json();

		// Return posts if the request was successful
		if (res.ok) {
			return {
				status: 200,
				body: data.docs, // Only return the `docs` array
			};
		}

		// Handle errors from the Payload CMS API
		return {
			status: res.status,
			body: { message: 'Failed to fetch posts from Payload CMS' },
		};
	} catch (error) {
		// Handle unexpected errors
		return {
			status: 500,
			body: { 
				message: 'Error fetching posts', 
				error: error.message, 
			},
		};
	}
}