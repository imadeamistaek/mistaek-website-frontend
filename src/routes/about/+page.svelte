<script>
	import '$lib/styles/main.scss';
	import Header from '$lib/sections/about/header.svelte';
	import Footer from '$lib/sections/footer.svelte';
    import Introduction from '$lib/sections/about/introduction.svelte';
    import Founder from '$lib/sections/about/founder.svelte';
    import Team from '$lib/sections/about/team.svelte';
    import Approach from '$lib/sections/about/approach.svelte';
    import Values from '../../lib/sections/about/values.svelte';
</script>

<main class="container">

	<Header />
	<Introduction />
	<Founder />
	<Team />
	<Approach />
	<Values />
	
</main>

<!-- Footer -->
<Footer />