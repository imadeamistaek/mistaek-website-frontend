<script>
	export let identifier = '01'; // Default identifier
	export let heading = 'Heading'; // Default heading
	export let description = 'description'; // Default description
</script>

<article class="numbered_content" aria-labelledby="item-{identifier}">
	<p class="body_text -subtle -nano">{identifier}</p>	
	<p class="body_text -large">{heading}</p>
	<p class="body_text -subtle -medium">{description}</p>
</article>

<style>
	.numbered_content {
		display: flex;
		flex-direction: column;
		gap: var(--space-100);
		padding: var(--space-400) var(--space-300);
		border-top: var(--border-width) solid var(--color-brand-dark-lighter);
	}
	.numbered_content p:first-child {
		margin-bottom: var(--space-400);
	}
</style>