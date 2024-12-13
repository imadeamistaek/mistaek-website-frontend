<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section class="section introduction col-8" aria-labelledby="introduction-heading">
	
	<SectionIdentifier label="Who we are"/>
	
	<header>
		<h4>At Mistaek, we believe that great design can turn complexity into clarity.</h4>
		<h4>We’re a forward-thinking studio, helping startups in tech, health, and sustainability create brands that stand out. With a focus on simplicity, we craft experiences that are both memorable and accessible, empowering businesses to grow confidently.</h4>
	</header>

	<div class="paragraph_group -horizontal col-5">
		<p class="body_text -medium -subtle">Founded on the belief that creativity thrives in imperfection, Mistaek was born to help brands grow by embracing challenges.</p>
		<p class="body_text -medium -subtle">We believe that by simplifying the complex, we create space for brands to connect, inspire, and thrive in their industries.</p>
	</div>

</section>

<style>
	section.introduction { align-items: flex-start; }
	section.introduction header { text-align: left; }
	section.introduction .paragraph_group { padding-top: var(--space-400); align-self: flex-end; }

	@media (min-width: 992px) {
		section.introduction { align-items: center; }
		section.introduction header { text-align: center; }
		section.introduction .paragraph_group { padding-top: var(--space-1000); }
	}
</style>
