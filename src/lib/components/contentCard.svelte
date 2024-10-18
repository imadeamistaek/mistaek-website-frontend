<script>
	export let heading; // Default heading
	export let description; // Default description
	export let icon ='';
	export let number ='';
</script>

<article class="content_card" aria-labelledby="item-{heading}">
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-exp-${icon}.webp`} alt="{icon}">
	</i>
	{/if}
	{#if number}
	<p class="h2 number">{number}</p>
	{/if}
	<p class="body_text -medium">{heading}</p>
	<p class="body_text -subtle -medium">{description}</p>
</article>

<style lang="scss">
	.content_card {
		display: flex;
		flex-direction: column;
		gap: $space-50;
		padding: $space-400 $space-300;
		border: $border-width solid $color-brand-dark-lighter;
		border-radius: $border-radius-xlg;
		text-align: left;
		transition: {
			property: border;
			duration: $transition-duration-fast;
			timing-function: $transition-timing-function;
		}

		p.number,.icon {margin-bottom: $space-400;}

		&:hover {
			border-color: lighten($color-brand-dark-lighter, 8%);
		}
	}
</style>