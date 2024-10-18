<script>
	// import ContactForm from '$lib/components/ContactForm.svelte';
	import '$lib/styles/main.scss';
	import NavigationBarTop from '$lib/components/navigationBarTop.svelte';
	import Hero from '../lib/sections/hero.svelte';
    import Problem from '../lib/sections/problem.svelte';
    import Solution from '../lib/sections/solution.svelte';
    import WhyChooseUs from '../lib/sections/whyChooseUs.svelte';
    import Process from '../lib/sections/process.svelte';
    import Brands from '../lib/sections/brands.svelte';
    import Pricing from '../lib/sections/pricing.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<NavigationBarTop />

<main class="container">
	
	<!-- Hero Section -->
	<Hero />
	
	<!-- Sections for content -->
	 <Problem/>
	 <Solution/>
	 <WhyChooseUs/>
	 <Process />
	 <Brands />
	 <Pricing />
	
</main>

<!-- Footer -->
<Footer />