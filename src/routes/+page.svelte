<script>
	// import ContactForm from '$lib/components/ContactForm.svelte';
	import '$lib/styles/main.scss';
	import ActionBarTop from '$lib/components/actionBarTop.svelte';
	import Hero from '../lib/sections/hero.svelte';
    import ProblemSolution from '../lib/sections/problemSolution.svelte';
	import ActionBarBottom from '../lib/components/actionBarBottom.svelte';
	import Footer from '$lib/sections/footer.svelte';
    import Process from '../lib/sections/process.svelte';
    import WhyChooseMe from '../lib/sections/whyChooseMe.svelte';
    import Services from '../lib/sections/services.svelte';
    import TrustedBy from '../lib/sections/trustedBy.svelte';
    import Mistaek from '../lib/sections/mistaek.svelte';
</script>

<ActionBarTop />

<main class="container">
	
	<!-- Hero Section -->
	<Hero />
	
	<!-- Sections for content -->
	 <ProblemSolution />
	 <Process />
	 <WhyChooseMe />
	 <Services />
	 <TrustedBy />
	 <!-- <Mistaek /> -->
	
</main>

<ActionBarBottom />

<!-- Footer -->
<Footer />