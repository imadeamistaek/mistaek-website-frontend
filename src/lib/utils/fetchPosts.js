// const API_URL = 'http://localhost:3000/api/posts';

// export async function fetchPosts(query = {}, fetchFn = fetch) {
// 	const queryString = new URLSearchParams();

// 	for (const [key, value] of Object.entries(query)) {
// 		if (typeof value === 'object' && value !== null) {
// 			for (const [op, val] of Object.entries(value)) {
// 				queryString.append(`where[${key}][${op}]`, val); // Correctly flatten the query
// 			}
// 		} else {
// 			queryString.append(key, value);
// 		}
// 	}

// 	// Simplified query construction for slug
// 	if (query.where && query.where.slug) {
// 	queryString.append(`where[slug][equals]`, query.where.slug.equals);
// 	}


// 	const url = `${API_URL}?${queryString}`;
// 	console.log('Fetching from URL:', url); // Debugging: Log the constructed URL

// 	try {
// 		const res = await fetchFn(url);

// 		if (!res.ok) {
// 			throw new Error(`Error fetching posts: ${res.statusText}`);
// 		}

// 		const data = await res.json();
// 		console.log('API Response Data:', data); // Debugging: Log the response

// 		return data.docs || []; // Assuming `docs` contains the array of posts
// 	} catch (error) {
// 		console.error('Error in fetchPosts:', error.message);
// 		throw error;
// 	}
// }

// fetchPosts.js
// const API_URL = 'http://localhost:3000/api/posts';
// export async function fetchPosts(query = {}) {
// 	const url = `${API_URL}?${new URLSearchParams(query)}`;
// 	const response = await fetch(url);
// 	const data = await response.json();

// 	console.log('Fetched posts:', data.docs);

// 	return data.docs || [];
// }

// src/lib/utils/fetchPosts.js
export async function fetchPosts(query = {}) {
	const url = `http://localhost:3000/api/posts?${new URLSearchParams(query)}`;
	console.log('Fetching posts from:', url); // Log to verify the URL
	
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}
		const data = await response.json();
		console.log('Fetched posts:', data); // Log the fetched data
		return data.docs || [];  // Ensure you're returning the array of posts
	} catch (error) {
		console.error('Error fetching posts:', error); // Log any errors
		return []; // Return an empty array if there's an error
	}
}