export async function load({ fetch, url }) {
	const BASE_URL = import.meta.env.VITE_API_URL;

	const page = url.searchParams.get('page') || 1; // Get current page, default to 1
	const res = await fetch(`${BASE_URL}/api/posts?page=${page}&limit=10`);
	
	if (!res.ok) {
		throw new Error('Failed to fetch blog posts');
	}
	
	const data = await res.json();
	return {
		initialPosts: data.docs,
		hasMore: data.totalDocs > data.docs.length,
	};
}

