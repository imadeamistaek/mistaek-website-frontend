<svelte:head>
	<title>Mistaek Design Studio - Homepage</title>
</svelte:head>

<script>
	// import ContactForm from '$lib/components/ContactForm.svelte';
	import Hero from '$lib/sections/home/hero.svelte';
	import Problem from '$lib/sections/home/problem.svelte';
	import Solution from '$lib/sections/home/solution.svelte';
	import Founder from '$lib/sections/about/founder.svelte';
	import WhyChooseUs from '$lib/sections/home/whyChooseUs.svelte';
	import Process from '$lib/sections/home/process.svelte';
	import Brands from '$lib/sections/home/brands.svelte';
	import Pricing from '$lib/sections/home/pricing.svelte';
	import TestimonialContent from '../lib/components/testimonialContent.svelte';
</script>

<!-- Hero Section -->
<Hero />

<!-- Sections for content -->
<Problem/>
<Solution/>
<TestimonialContent
	quote={[
		"I've had the pleasure of collaborating with André for several years, and his creativity and assertiveness always stand out. His ability to combine innovative design thinking with practical solutions brings significant value to any project. His deep understanding of the user experience principles, combined with his strategic mindset, ensures impactful and user-centered solutions.",
		"Beyond his technical skills, his reliability and trustworthiness make him a standout professional in the UX industry. His contributions continuously elevate the quality of the work, making him a valuable asset to any team or project.",
		"I highly recommend André to anyone looking for an experienced and dedicated UX designer who truly makes a difference.",
	]}
	photo="/testimonials/beatrizbotao.jpeg"
	label="Beatriz Botão, Co-Founder & Strategy Lead at"
	link="https://theeggwhite.com/"
	linkLabel="The Eggwhite"
/>
<WhyChooseUs/>
<TestimonialContent
	quote={[
		"I had the privilege of working alongside André in the past and, more recently, the opportunity to collaborate with him as a partner on a project to create a new brand, including the entire process of developing its identity and graphic image.",
		"André consistently demonstrates exceptional dedication, passion, and quality in his work. He seamlessly blends creative and artistic expertise with technical proficiency, embodying the rare combination of a skilled designer and a capable developer. Whether crafting innovative designs or implementing technical solutions, André’s talent and commitment shine through.",
		"I highly recommend André to anyone seeking a professional with a unique mix of creativity and technical know-how.",
	]}
	photo="/testimonials/carlosquadrado.jpeg"
	label="Carlos Quadrado, Data Lead at"
	link="https://comon.pt/"
	linkLabel="COMON"
/>
<Founder buttonLabel="Know more about me"/>
<Process />
<Brands />
<Pricing />