// src/hooks.server.js
export async function handle({ event, resolve }) {
	const response = await resolve(event);
	
	// Check for 404 and pass custom error object
	if (response.status === 404) {
		return {
			status: 404,
			error: new Error('Not Found'),
			headers: response.headers,
			body: response.body
		};
	}
	
	// Check for 500 or other server-side errors (optional)
	if (response.status >= 500) {
		return {
			status: response.status,
			error: new Error('Internal Server Error'),
			headers: response.headers,
			body: response.body
		};
	}
	
	return response;
}