<script>
	import { page } from "$app/stores"; //Sveltekit store to get current page info
	import { fade } from 'svelte/transition';

	import NavigationBar from '$lib/components/navigationBar.svelte';
	import Footer from '$lib/components/footer.svelte';

	$: currentPath = $page.url.pathname; //Get the current path
</script>

<NavigationBar {currentPath}/>

<!-- This will render the content of the individual pages -->
<main class="container" in:fade={{duration: 300}} out:fade={{duration: 300}}>
	<slot /> 
</main>

<Footer />