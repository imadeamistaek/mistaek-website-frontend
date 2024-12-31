<script>
	import { fade } from 'svelte/transition';

	export let isVisible = true; // Controlled externally
</script>

{#if isVisible}
	<div class="loader-wrapper" out:fade={{ duration: 320 }}>
		<div class="loader-content">
			<picture>
				<source media="(min-width:650px)" srcset="/logotype_w.webp">
				<source media="(min-width:320px)" srcset="/logo.webp">
				<img src="/logotype_w.webp" alt="Website Logo" />
			</picture>
		</div>
	</div>
{/if}

<style>
	.loader-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-brand-dark);
		z-index: var(--zindex-fixed);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loader-content {
		width: 16cqw;
	}

	.loader-content picture img {
		width: 100%;
	}
</style>
