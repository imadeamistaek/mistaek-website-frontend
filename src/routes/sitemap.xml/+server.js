export async function GET({ fetch, setHeaders }) {
	setHeaders({
	  'Content-Type': 'application/xml'
	});
  
	const site = 'https://www.mistaek.com';
	const response = await fetch('https://mistaek-backend.onrender.com/api/posts');
	
	if (!response.ok) {
	  throw new Error('Failed to fetch posts.');
	}
	
	const data = await response.json();
	const posts = data.docs || [];  // Use data.docs as the posts array
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	  <url>
		<loc>${site}</loc>
		<priority>1.0</priority>
	  </url>
	  <url>
		<loc>${site}/about</loc>
		<priority>0.9</priority>
	  </url>
	  <url>
		<loc>${site}/roadmap</loc>
		<priority>0.9</priority>
	  </url>
	  <url>
		<loc>${site}/blog</loc>
		<priority>0.8</priority>
	  </url>
	  ${posts.map(post => {
		// Use the top-level updatedAt
		const lastMod = post.updatedAt ? post.updatedAt.split('T')[0] : '1970-01-01';  // Fallback to a default date
		const slug = post.slug || post.id;  // Use slug, fallback to id if slug is missing
		return `
		  <url>
			<loc>${site}/blog/${slug}</loc>
			<changefreq>monthly</changefreq>
			<lastmod>${lastMod}</lastmod>
		  </url>
		`;
	  }).join('')}
	</urlset>`;
  
	return new Response(sitemap);
  }
  