<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ContentCard from "$lib/components/contentCard.svelte";
	import ActionLink from "$lib/components/actionLink.svelte";
</script>

<section class="section process" aria-labelledby="solution-heading">
	
	<SectionIdentifier icon="process" label="A Clear step-by-step journey"/>
	
	<header>
		<h4>Our approach ensures a smooth,</h4>
		<h4>results-driven experience for every client</h4>
	</header>
	
	<div class="row">
		<ContentCard number="01" heading="Introductory Call" description="We get to know each other and discuss your needs."/>
		<ContentCard number="02" heading="Discovery Call" description="In a one-hour detailed session, we’ll dive into the problem areas and explore how we can help."/>
		<ContentCard number="03" heading="Project Execution" description="Once we agree on a solution, we start designing and delivering a product you can be proud of."/>
	</div>
	
	<ActionLink url="https://cal.com/mistaek/15min" customClass="action -filled" label="Book an intro call" icon="arrow-out" />
	
</section>

<style>
	section.process { align-items: center; text-align: center; }
	section.process header { gap: var(--space-50); }
</style>
