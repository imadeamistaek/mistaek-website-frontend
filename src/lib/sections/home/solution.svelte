<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ContentCard from "$lib/components/contentCard.svelte";
	import ActionLink from "$lib/components/actionLink.svelte";
</script>

<section class="section solution col-8" aria-labelledby="solution-heading">
	
	<SectionIdentifier icon="solution" label="Our Role in solving it"/>
	
	<header>
		<h4>We’re ready to partner with you...</h4>
		<p class="body_text -medium -subtle col-5">At Mistaek, we specialise in helping early-stage tech startups solve design challenges through clear, thoughtful solutions.</p>
		<p class="body_text -medium -subtle col-5">By embracing mistakes as opportunities for innovation, we turn challenges into solutions that work for you.</p>
	</header>
	
	<div class="grid -three-slots">
		<ContentCard heading="Tailored Solutions" description="Each project is approached with fresh eyes, creating unique solutions for your brand. With a focus on accessibility and usability, we create designs that not only look good but also work flawlessly."/>
		<ContentCard heading="Collaboration first" description="We believe the best designs come from close collaboration with clients—together, we create meaningful experiences that drive growth."/>
		<ContentCard heading="Design and Strategy Expertise" description="Over the years, we’ve mastered modularity, blending creativity with strategy to provide user-centred designs."/>
	</div>
	
	<ActionLink url="https://cal.com/mistaek/15min" customClass="action -filled" label="Book an intro call" icon="arrow-out" />
	
</section>

<style lang="scss">
	section.solution {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-400;
		text-align: center;
		
		header {
			display: flex;
			flex-direction: column;
			gap: $space-200;
			align-items: center;
		}
	}
</style>