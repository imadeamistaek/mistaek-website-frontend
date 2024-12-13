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
