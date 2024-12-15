// src/lib/utils/fetchPosts.js
export async function fetchPostsBySlug(slug) {
	const url = `http://localhost:3000/api/posts/${slug}`;
	const response = await fetch(url);
	const data = await response.json();
	return data || null;
}