<script>
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import Loader from '$lib/components/loader.svelte';
	import LoaderInitial from '$lib/components/loaderInitial.svelte';
	import NavigationBar from '$lib/components/navigationBar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { initializeGoogleAnalytics } from '$lib/utils/analytics';

	import { fly, scale } from 'svelte/transition';
	import '$lib/styles/main.css';

	let showInitialLoader = true;
	let showTransitionLoader = false;
	let showContent = false;

	// Handle initial load
	onMount(() => {
		setTimeout(() => {
			showInitialLoader = false; // Hide the initial loader
			showContent = true; // Show content
		}, 1200); // Adjust duration as needed
		if (import.meta.env.MODE === 'production') {
			initializeGoogleAnalytics('G-FMXFEETWCF');
		}
	});

	// Navigation hooks
	beforeNavigate(() => {
		showTransitionLoader = true; // Show transition loader
		showContent = false; // Hide content during navigation
	});

	afterNavigate(() => {
		setTimeout(() => {
			showTransitionLoader = false; // Hide transition loader
			showContent = true; // Show content
		}, 1200); // Adjust duration as needed
	});
</script>


<!-- Initial Loader -->
<LoaderInitial isVisible={showInitialLoader} />

<!-- Loader -->
<Loader isVisible={showTransitionLoader} />

<!-- ---------------------------------------- -->
<!-- Content -->
<!-- ---------------------------------------- -->
<div transition:fly={{ y: -40, duration: 640 }}>
	<NavigationBar currentPath={$page.url.pathname} />
</div>

{#if showContent}
	<main class="container" in:scale={{ start: 0.98, duration: 480, delay: 400 }} out:scale={{ start: 1.02, duration: 640 }}>
		<slot />
		<Footer />
	</main>
{/if}
