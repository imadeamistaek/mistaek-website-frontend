<script>
	// import ContactForm from '$lib/components/ContactForm.svelte';
	import '$lib/styles/main.scss';
	import NavigationBarTop from '$lib/components/navigationBarTop.svelte';
	import Hero from '../lib/sections/hero.svelte';
    import ProblemSolution from '../lib/sections/problemSolution.svelte';
	import NavigationBarBottom from '../lib/components/navigationBarBottom.svelte';
	import Footer from '$lib/sections/footer.svelte';
    import Process from '../lib/sections/process.svelte';
    import WhyChooseMe from '../lib/sections/whyChooseMe.svelte';
    import Services from '../lib/sections/services.svelte';
    import TrustedBy from '../lib/sections/trustedBy.svelte';
    import Mistaek from '../lib/sections/mistaek.svelte';
    import CallToAction from '../lib/sections/callToAction.svelte';
</script>

<NavigationBarTop />

<main class="container">
	
	<!-- Hero Section -->
	<Hero />
	
	<!-- Sections for content -->
	 <ProblemSolution />
	 <Services />
	 <CallToAction />
	 <Process />
	 <WhyChooseMe />
	 <TrustedBy />
	 <!-- <Mistaek /> -->
	
</main>

<!-- <NavigationBarBottom /> -->

<!-- Footer -->
<Footer />