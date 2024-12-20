<script>
	import { goto } from '$app/navigation';
	import { postsStore } from '$lib/stores/posts';
	import ArticleCard from "$lib/components/articleCard.svelte";
	
	export let posts = []; // Posts are now passed in as props
	
	// Subscribe to the store
	const unsubscribe = postsStore.subscribe((value) => {
		posts = value;
	});
	
	// Navigate to the post detail page
	function goToPost(slug) {
		goto(`/blog/${slug}`);
	}
	
	// Cleanup subscription on component destroy
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		unsubscribe();
	});

	const latestPost = posts[0] || null;
</script>

<div class="row">
	<div class="blog_container">
		<div class="grid_heading">
			<p class="body_text -medium -subtle display_heading">Latest article</p>
		</div>

		{#if latestPost}
			<ArticleCard customClass={'-highlight'} post={latestPost} on:click={() => goToPost(latestPost.slug)} />
		{:else}
		<p>Loading post...</p>
		{/if}
	</div>
</div>
	
<style>
	.blog_container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-400);
	}

	.blog_container .grid_heading {
		span: 1;
	}
	
	@media (max-width: 768px) {
		.blog_container { grid-template-columns: 1fr 1fr; }
	}
	
	@media (max-width: 480px) {
		.blog_container { grid-template-columns: 1fr; }
	}
</style>