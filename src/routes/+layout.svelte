<script>
	import { page } from "$app/stores"; //Sveltekit store to get current page info
	import { blur } from 'svelte/transition';
	import '$lib/styles/main.css';

	import NavigationBar from '$lib/components/navigationBar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<NavigationBar currentPath={$page.url.pathname}/>

<!-- This will render the content of the individual pages -->
{#key $page.url.pathname}
<main class="container" in:blur={{ duration: 640 }}>
		<slot /> 
</main>
{/key}

<Footer />