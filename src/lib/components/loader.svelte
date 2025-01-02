<script>
	import { fly } from 'svelte/transition';

	export let isVisible = false; // Controlled externally
</script>

{#if isVisible}
	<div class="loader-wrapper" in:fly={{ y: 2000, duration: 800 }} out:fly={{ y: -2000, duration: 800, delay: 240 }}>
		<div class="loader-content" in:fly={{ y: 320, duration: 800, delay: 800 }} out:fly={{ y: -320, duration: 800 }} >
			<picture>
				<source media="(min-width:650px)" srcset="/logo.webp">
				<source media="(min-width:320px)" srcset="/logo.webp">
				<img src="/logo.webp" alt="Website Logo" />
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

	.loader-content { width: 16cqw; }
	.loader-content picture img { width: 100%; }

	@media (min-width: 992px) {
		.loader-content { width: 4cqw; }
	}
</style>
