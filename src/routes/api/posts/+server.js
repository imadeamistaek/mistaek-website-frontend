// src/routes/api/posts/+server.js
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
    const BASE_URL = import.meta.env.VITE_API_URL;

    try {
        // Extract `page` and `limit` from query params; default to page 1, limit 10
        const page = Number(url.searchParams.get('page')) || 1;
        const limit = Number(url.searchParams.get('limit')) || 10;

        // Use the full URL to the API route
        const res = await fetch(`${BASE_URL}/api/posts?limit=${limit}&page=${page}`);

        // Log the raw response text to help debug
        const textResponse = await res.text();
        console.log('Raw response text:', textResponse);

        // Check for non-JSON response
        if (!res.ok || !textResponse.trim().startsWith('{')) {
            throw new Error('Received non-JSON response');
        }

        const data = JSON.parse(textResponse);

        // Handle successful data response
        const { docs, hasNextPage: next, page: fetchedPage } = data;

        if (fetchedPage === 1) {
            [latestPost, ...posts] = docs;
        } else {
            posts = [...posts, ...docs];
        }

        currentPage = fetchedPage;
        hasNextPage = next;

        return json(data);
    } catch (err) {
        console.error('Error fetching posts:', err);
        return json({ error: 'Unable to fetch posts' }, { status: 500 });
    }
};