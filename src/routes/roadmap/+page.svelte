<svelte:head>
	<title>Mistaek Design Studio - Roadmap</title>
</svelte:head>

<script>
	import '$lib/styles/main.scss';
	import Hero from '$lib/sections/roadmap/hero.svelte';
	import Intro from '$lib/sections/roadmap/intro.svelte';
	import Horizon from '$lib/sections/roadmap/horizon.svelte';
    import Follow from '$lib/sections/roadmap/follow.svelte';
    import Roadmap from '$lib/sections/roadmap/roadmap.svelte';
</script>

<Hero />
<Intro />
<Roadmap />
<Horizon />
<Follow />