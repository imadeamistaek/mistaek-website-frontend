<script>
	import { goto } from '$app/navigation';
	import { postsStore } from '$lib/stores/posts';
	import ArticleCard from "$lib/components/ArticleCard.svelte";
	
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
</script>

<div class="row">
	<div class="blog_container">
		{#if posts && posts.length > 0}
		{#each posts as post}
			<ArticleCard {post} on:click={() => goToPost(post.slug)} />
		{/each}
		{:else}
		<p>Loading posts...</p>
		{/if}
	</div>
</div>
	
<style>
	.blog_container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-400);
	}
	
	@media (max-width: 768px) {
		.blog_container { grid-template-columns: 1fr 1fr; }
	}
	
	@media (max-width: 480px) {
		.blog_container { grid-template-columns: 1fr; }
	}
</style>