<script>
    import ProjectCard from "$lib/components/projectCard.svelte";
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ServicesCard from "$lib/components/servicesCard.svelte";
</script>

<section id="pricing-section" class="section pricing" aria-labelledby="problem-heading">
	
	<SectionIdentifier icon="pricing" label="Explore how we can work together"/>
	
	<header>
		<h4 class="col-7">We offer <span class="-underline">three levels</span> of consultation to suit your <span class="highlight">unique needs</span></h4>
	</header>

	<div class="row">
		<ServicesCard
			name="Basic"
			description="A discovery call to understand your needs and offer initial advice."
			value="174 €"
			items={['One-hour consultation—we’ll talk and answer questions on the spot, trying to mitigate existing problems']}
			/>
		<ServicesCard
			name="Standard"
			description="A deep dive into your design challenges with actionable insights."
			value="475 €"
			items={['Everything in Basic', 'Expert Review Document', 'Follow-up call']}
			hasBadge
			/>
		<ServicesCard
			name="Advanced"
			description="A comprehensive roadmap to guide you with your design needs."
			value="966 €"
			items={['Everything in Standard', 'Strategic Roadmap document', 'Additional Follow-up call']}
			/>
	</div>
	
	<div class="row col-7">
		<ProjectCard/>
	</div>

</section>

<style lang="scss">
	section.pricing {
		display: flex;
		flex-direction: column;
		align-items: center;

		header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $space-400;
			text-align: center;
		}
	}
</style>