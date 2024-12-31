<script>
	import Hero from '$lib/sections/blog/hero.svelte';
	import BlogPostCard from '$lib/components/blogPostCard.svelte';
	
	export let data;
	
	// Initial posts and pagination setup
	let posts = [...data.initialPosts];
	let currentPage = 1;
	let hasMore = data.hasMore;
	let loading = false;
	const BASE_URL = import.meta.env.VITE_API_URL;
	
	// Destructure latest and rest posts dynamically
	$: [latestPost, ...restPosts] = posts;
	
	// Load more posts
	async function loadMore() {
		if (loading || !hasMore) return;
		
		loading = true;
		
		try {
			const res = await fetch(`${BASE_URL}/api/posts?page=${currentPage + 1}&limit=10`);
			const newData = await res.json();
			
			posts = [...posts, ...newData.docs];
			currentPage += 1;
			hasMore = newData.totalDocs > posts.length;
		} catch (error) {
			console.error('Error fetching posts:', error);
		} finally {
			loading = false;
		}
	}
</script>

<!-- Hero Section -->
<Hero />

<!-- Highlighted Latest Post -->
<section class="latest_post">
	<div class="row">
		<div class="blog_container">
			<div class="grid_heading">
				<p class="body_text -medium -subtle display_heading">Latest article</p>
			</div>
			<BlogPostCard customClass={'-highlight'} post={latestPost} />
		</div>
	</div>
</section>

<!-- All Articles -->
<section class="all_posts">
	<div class="row">
		<div class="grid_heading">
			<h2 class="display_heading">All articles</h2>
		</div>
	</div>
	<div class="row">
		<div class="blog_container">
			{#each restPosts as post}
			<BlogPostCard post={post} />
			{/each}
		</div>
	</div>
	{#if hasMore}
	<button class="action -subtle" on:click={loadMore} disabled={loading}>
		<span>{loading ? 'Loading articles...' : 'View more articles'}</span>
	</button>
	{/if}
</section>

<style>
	.latest_post .blog_container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-400);
	}
	
	.latest_post .blog_container .grid_heading {
		span: 1;
	}
	
	@media (max-width: 768px) {
		.latest_post .blog_container { grid-template-columns: 1fr 1fr; }
	}
	
	@media (max-width: 480px) {
		.latest_post .blog_container { grid-template-columns: 1fr; }
	}
	
	.all_posts {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.all_posts .blog_container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-400);
	}
	
	@media (max-width: 768px) {
		.all_posts .blog_container { grid-template-columns: 1fr 1fr; }
	}
	
	@media (max-width: 480px) {
		.all_posts .blog_container { grid-template-columns: 1fr; }
	}
</style>
