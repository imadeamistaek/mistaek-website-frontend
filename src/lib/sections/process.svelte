<script>
	import NumberedContent from "../components/numberedContent.svelte";
	import SectionIdentifier from "../components/sectionIdentifier.svelte";	
</script>

<section class="section process" aria-labelledby="process-heading">
	<div class="content">
		<div class="row">
			
			
			<div class="col content_group -borderless">
				<SectionIdentifier letter="C" label="My 3-Step Process to Success"/>
				<header class="heading_group">
					<p class="body_text -large">Struggling to turn your vision into a clear, impactful brand?</p>
					<h4>I believe in making things simple and straightforward, ensuring we’re always on the same page.</h4>
				</header>
			</div>
			
			<div class="col">
				
				<div class="grid">
					<NumberedContent
					identifier="01. Discovery & Strategy"
					heading="Understand your vision"
					description="We start by diving deep into your goals, audience, and brand values to create a tailored design strategy."
					/>
					<NumberedContent
					identifier="02. Design & Iterate"
					heading="Crafting your unique identity"
					description="We design and refine your brand elements, ensuring they align with your vision and resonate with your audience."
					/>
					<NumberedContent
					identifier="03. Launch & Grow"
					heading="Bringing your brand to life"
					description="With everything in place, we help you launch your new look, including a responsive, engaging website, and continue to support your growth with ongoing improvements."
					/>
				</div>
				
			</div>			
			
		</div>
	</div>
</section>

<style lang="scss">
	.col:last-child {
		padding-top: $space-0;

		.grid :global(.numbered_content:first-child) {grid-column: 2/2}
		
		@media(min-width: $breakpoint-lg) {
			& {padding-top: $space-max;}
		}

	}
</style>