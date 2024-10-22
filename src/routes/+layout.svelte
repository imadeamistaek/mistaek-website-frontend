<script>
	import { page } from "$app/stores"; //Sveltekit store to get current page info
	import { fade } from 'svelte/transition';

	import NavigationBarTop from '$lib/components/navigationBarTop.svelte';

	$: currentPath = $page.url.pathname; //Get the current path
</script>

<NavigationBarTop {currentPath}/>

<!-- This will render the content of the individual pages -->
<main in:fade={{duration: 300}} out:fade={{duration: 300}}>
	<slot /> 
</main>