<script>
    import PatternedCard from "$lib/components/patternedCard.svelte";
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ServicesCard from "$lib/components/servicesCard.svelte";
	import ActionLink from "$lib/components/actionLink.svelte";
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
			items={['Everything in Basic', 'Design Snapshot Document', 'Follow-up call']}
			hasBadge
			/>
		<ServicesCard
			name="Advanced"
			description="A comprehensive roadmap to guide you with your design needs."
			value="966 €"
			items={['Everything in Standard', 'Action Blueprint document', 'Additional Follow-up call']}
			/>
	</div>
	
	<div class="row col-7">
		<PatternedCard
			heading="Already have a project in the works?"
			description={[
				"Whether it’s a brand refresh, website redesign, or specific design tasks, we’ll collaborate closely to take your project to the next level.",
				"Let’s refine your vision and make sure everything aligns with your brand’s goals."
			]}
		>
			<ActionLink url="https://cal.com/mistaek/15min" customClass="action -outline" label="Book a call" icon="arrow-out" />
		</PatternedCard>
	</div>

</section>

<style lang="scss">
	section.pricing {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-400;

		header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $space-400;
			text-align: center;
		}
	}
</style>