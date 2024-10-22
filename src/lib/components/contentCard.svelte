<script>
	export let heading = null; // Default heading
	export let description = null; // Default description
	export let customClass = null;
	export let icon = null;
	export let number = null;
	export let image = null;
</script>

<article class={`content_card ${customClass}`} aria-labelledby="item-{heading}">
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-exp-${icon}.webp`} alt="{icon}">
	</i>
	{/if}
	{#if number}
	<p class="h2 number">{number}</p>
	{/if}
	{#if image}
	<img src={`${image}.png`} alt="{image}" />
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