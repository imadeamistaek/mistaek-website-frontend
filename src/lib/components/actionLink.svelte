<script>
	export let label = null; // Default label
	export let icon = null;
	export let customClass = null;
	export let url = null;
</script>

<a href={url} class={`${customClass}`} target="_blank" rel="noopener noreferrer" aria-label={label}>
	{#if label}
	<span>{label}</span>
	{/if}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="arrow-out">
	</i>
</a>