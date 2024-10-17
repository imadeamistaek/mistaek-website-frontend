<script>
	export let label; // Default label
	export let customClass;
	export let anchor = null; // Optional prop for the anchor link
</script>

{#if anchor}
<a href={anchor} class={`action ${customClass}`}>
	<span>{label}</span>
</a>
{:else}
<button class={`action ${customClass}`} aria-label="{label}">
	<span>{label}</span>
</button>
{/if}