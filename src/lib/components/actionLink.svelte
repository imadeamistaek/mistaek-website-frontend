<script>
	export let label = ''; // Default label
	export let icon;
	export let customClass = '';
	export let url = '';
</script>

<a href={url} class={`${customClass}`} target="_blank" rel="noopener noreferrer" aria-label={label}>
	{#if label}
	<span>{label}</span>
	{/if}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt="arrow-out">
	</i>
</a>