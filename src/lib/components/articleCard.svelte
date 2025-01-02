<script>
	const BASE_URL = import.meta.env.VITE_API_URL;

	import Tag from "./tag.svelte";
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition'; // Importing fade transition
	import { hoveredPost } from '$lib/stores/hoveredPost';  // Import the store (if needed)
	export let post; // Accept the post as a prop
	export let customClass = null;
	
	const dispatch = createEventDispatcher(); // For custom events
	let isHovered = false;  // Local state to track hover state
	
	// When the mouse enters the card
	function onMouseEnter() {
	  isHovered = true;
	  hoveredPost.set(post); // Store the hovered post in the store
	  dispatch('hover', post);  // Optionally dispatch a custom event
	}
  
	// When the mouse leaves the card
	function onMouseLeave() {
	  isHovered = false;
	  hoveredPost.set(null);  // Clear the hovered post when mouse leaves
	  dispatch('hover', null); // Optionally dispatch a custom event
	}
  
	// Handle the click event to navigate to the post detail page
	function onClick() {
	  dispatch('click', post.slug); // Optionally dispatch a click event with the post slug
	}
</script>

<article class={`article_card ${customClass}`} transition:fade={{ duration: 640 }}>
	<a
		href={`/blog/${post.slug}`}
		class="article_card-link"
		role="button"
		tabindex="0"
		aria-label={`View details about ${post.title}`}
		on:mouseenter={onMouseEnter}
		on:mouseleave={onMouseLeave}
		on:click={onClick}
	>
		<div class="slot -image">
			<div class="pairing_tags">
				{#if Array.isArray(post.categories) && post.categories.length > 0}
					{#each post.categories as category (category.id || category)}
						<Tag label={category.title || category || 'No Category'} />
					{/each}
				{:else if post.categories}
					<Tag label={post.categories} />
				{:else}
					<Tag label="No Category" />
				{/if}
			</div>
			{#if post.featureImage}
				<img 
					src={`${BASE_URL}${post.featureImage}`} 
					alt={post.meta?.image?.alt || post.title || 'Article Image'} 
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