<script>
	export let post;
	import Tag from "./tag.svelte";
	import { fade } from 'svelte/transition'; // Importing fade transition
	export let customClass = null;
	const BASE_URL = import.meta.env.VITE_API_URL;
</script>

<article class={`article_card ${customClass}`} transition:fade={{ duration: 640 }}>
	<a
		href={`/blog/${post.slug}`}
		class="article_card-link"
		role="button"
		tabindex="0"
		aria-label={`View details about ${post.title}`}
		>
		<div class="slot -image">
			<div class="pairing_tags">
				{#if post.categories && post.categories.length > 0}
				{#each post.categories as category (category.id)}  <!-- You can use category.id as the key for each loop -->
					<Tag label={category.title || 'Not Categorised'} />
				{/each}
				{:else}
					<Tag label="No Category" />
				{/if}
			</div>
			{#if post.meta.image}
				<img 
					src={`${BASE_URL}${post.featureImage.url}`} 
					alt={post.title || 'No title'} 
					class="article_card-image"
					loading="lazy"
				/>
			{/if}
		</div>
		<div class="slot -details">
			<h5 class="post_title">{post.title || 'Untitled'}</h5>
		</div>
	</a>
</article>