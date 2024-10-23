<script>
	// import ContactForm from '$lib/components/ContactForm.svelte';
	import '$lib/styles/main.scss';
	import Hero from '$lib/sections/home/hero.svelte';
    import Problem from '$lib/sections/home/problem.svelte';
    import Solution from '$lib/sections/home/solution.svelte';
    import Founder from '$lib/sections/about/founder.svelte';
    import WhyChooseUs from '$lib/sections/home/whyChooseUs.svelte';
    import Process from '$lib/sections/home/process.svelte';
    import Brands from '$lib/sections/home/brands.svelte';
    import Pricing from '$lib/sections/home/pricing.svelte';

</script>

<!-- Hero Section -->
<Hero />

<!-- Sections for content -->
<Problem/>
<Solution/>
<WhyChooseUs/>
<Founder buttonLabel="Know more about me"/>
<Process />
<Brands />
<Pricing />