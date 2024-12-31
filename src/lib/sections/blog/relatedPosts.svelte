<script>
	export let relatedPosts = []; // Array of related posts passed as a prop
	import ArticleCard from "$lib/components/articleCard.svelte";
</script>

<section class="related_posts">
	<div class="row">
		<div class="grid_heading">
			<h2 class="display_heading">Related articles</h2>
		</div>
		<a href="/blog" aria-label="Blog" class="action">
			<p class="body_text -large -subtle navigation_item">View all articles</p>
		</a>
	</div>
	<div class="posts">
		{#if relatedPosts.length > 0}
		{#each relatedPosts.slice(0, 3) as post (post.id || post.slug)}
			<ArticleCard {post} />
		{/each}
		{:else}
		<p>No related posts available.</p>
		{/if}
	</div>
</section>

<style>
	.related_posts {
		margin: var(--space-400) 0;
	}
	.related_posts .posts {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-400);
	}
	.related_posts .grid_heading { width: 100%; flex: auto;}

	.related_posts > .row { align-items: flex-end;}
</style>