<script>
	export let label = null; // Default label
	export let icon = null;
	export let customClass = null;
</script>

<div class={`identifier ${customClass}`} aria-label="{label}">
	{#if icon}
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-exp-${icon}.webp`} alt="{icon}">
	</i>
	{/if}
	<p class="body_text -nano">{label}</p>
</div>

<style>
	.identifier {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: var(--space-200);
	}

	.identifier.-horizontal {
		flex-direction: row;
		width: 100%;
	}

	.identifier p {
		color: var(--color-brand-accent);
	}
	.identifier.-horizontal p {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		gap: var(--space-200);
	}
	.identifier.-horizontal p::after {
		content: '';
		height: 1px;
		flex: 1;
		background-color: var(--color-brand-accent);
	}
</style>