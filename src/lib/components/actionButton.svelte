<script>
	export let label = null; // Default label
	export let customClass = null;
	export let icon = null;
	export let anchor = null; // Optional prop for the anchor link
</script>

{#if anchor}
<a href={anchor} class={`action ${customClass}`}>
	{#if label}
	<span>{label}</span>
	{/if}
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="{icon}">
	</i>
	{/if}
</a>
{:else}
<button class={`action ${customClass}`} aria-label="{label}">
	<span>{label}</span>
</button>
{/if}