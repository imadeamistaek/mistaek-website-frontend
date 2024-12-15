<svelte:head>
<title>Mistaek Design Studio - Blog</title>
</svelte:head>

<script>
	import Hero from '$lib/sections/blog/hero.svelte';
	import PostGrid from '$lib/sections/blog/postGrid.svelte';
	export let posts = [];
</script>

<Hero />
<PostGrid {posts} />