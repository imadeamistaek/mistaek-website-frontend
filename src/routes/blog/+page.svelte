<svelte:head>
<title>Mistaek Design Studio - Blog</title>
</svelte:head>

<script>
	import Hero from '$lib/sections/blog/hero.svelte';
	import PostGrid from '$lib/sections/blog/postGrid.svelte';
	import LatestArticle from '$lib/sections/blog/latestArticle.svelte';
	export let posts = [];

</script>

<Hero />
<LatestArticle {posts} />
<PostGrid {posts} />