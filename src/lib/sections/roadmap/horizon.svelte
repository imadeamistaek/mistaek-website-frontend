<script>
    import PatternedCard from "$lib/components/patternedCard.svelte";
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ButtonEmailSuggestion from "$lib/components/buttonEmailSuggestion.svelte";
</script>

<section id="horizon-section" class="section horizon" aria-labelledby="problem-heading">
	
	<SectionIdentifier label="What’s on the Horizon?"/>
	
	<header>
		<h4>This space previews the exciting developments</h4>
		<h4> we plan to explore.</h4>
	</header>
	
	<div class="row col-7">
		<PatternedCard
			heading="Have a suggestion? Let us know!"
			description={[
				"As Mistaek grows, we’re always planning new ways to elevate our work and enhance the services we bring to forward-thinking brands. This section is where we’ll preview future initiatives that are taking shape.",
				"From ambitious design concepts to ideas sparked by your feedback, you’ll see what’s coming down the line."
			]}
		>
			<ButtonEmailSuggestion />
		</PatternedCard>
	</div>

</section>

<style lang="scss">
	section.horizon {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-400;

		header {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>