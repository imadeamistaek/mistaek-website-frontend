<script>
	export let photo = ''; // URL or path to the photo
	export let altText = 'Author photo'; // Alt text for the image
	export let label = 'Author'; // Default label for name
	export let role = 'Role'; // Default role
</script>

<div class="author">
	<img src={photo} alt={altText} class="author-photo" />
	<div class="author_details">
		<p class="body_text -medium -subtle">{label}</p>
		{#if role}
			<p class="body_text -medium -subtle">{role}</p>
		{/if}
	</div>
</div>

<style>
	.author {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-200);
		margin: var(--space-max) 0 0;
	}
	.author .author_details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.author img {
		max-width: 64px;
		max-height: 64px;
		width: 100%;
		display: block;
		object-fit: cover;
		border: var(--border-width) solid var(--color-brand-dark-lighter);
		border-radius: var(--border-radius-max);
	}
	
	@media (max-width: 768px) {
		.author { margin: var(--space-800) 0; }
	}
</style>