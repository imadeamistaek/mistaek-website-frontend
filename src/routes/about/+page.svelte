<svelte:head>
	<title>Mistaek Design Studio - About</title>
</svelte:head>

<script>
	import '$lib/styles/main.scss';
	import Hero from '$lib/sections/about/hero.svelte';
	import Introduction from '$lib/sections/about/introduction.svelte';
	import Founder from '$lib/sections/about/founder.svelte';
	import Team from '$lib/sections/about/team.svelte';
	import Approach from '$lib/sections/about/approach.svelte';
	import Values from '$lib/sections/about/values.svelte';
</script>

<Hero />
<Introduction />
<Founder />
<Team />
<Approach />
<Values />