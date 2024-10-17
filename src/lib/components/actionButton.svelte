<script>
	export let label = ''; // Default label
	export let icon = '';
	export let customClass = '';
</script>

<button class={`action ${customClass}`} aria-label="{label}">
	{#if label}
		<span>{label}</span>
	{/if}
	<i class="icon" aria-hidden="true">
		<img src={`mi-${icon}.webp`} alt="arrow-out">
	</i>
</button>