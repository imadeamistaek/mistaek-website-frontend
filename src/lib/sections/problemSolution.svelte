<script>
	import SectionIdentifier from "../components/sectionIdentifier.svelte";	
</script>

<section class="section problem_solution">
	<div class="grid">
		
		<div class="content_group">
			
			<SectionIdentifier letter="A" label="The Problem"/>
			
			<div class="heading_group">
				<h4>Struggling to turn your vision into a clear, impactful brand?</h4>
				<div class="paragraph_group -vertical">
					<p class="body_text -medium -subtle">
						Many startups face the challenge of translating their innovative ideas into a cohesive brand that resonates with their audience.
					</p>
					<p class="body_text -medium -subtle">
						Whether it’s ensuring consistency across digital platforms, creating user-friendly designs, or telling a compelling story, the process can feel overwhelming.
					</p>
				</div>
			</div>
			
		</div>
		
		<div class="content_group">
			
			<SectionIdentifier letter="B" label="My Unique Solution"/>
			
			<div class="heading_group">
				<h4>A streamlined and accessible approach to design</h4>
				<div class="paragraph_group -horizontal">
					<p class="body_text -medium -subtle">
						I specialise in creating design systems, UX/UI, product design, branding, and web design that are not just visually stunning but also accessible and easy to understand.
					</p>
					<p class="body_text -medium -subtle">
						My process simplifies the complex, ensuring your brand’s digital presence is cohesive and user-friendly. By embracing mistakes as opportunities for innovation, I turn challenges into solutions that work for you.
					</p>
				</div>
			</div>
			
		</div>
		
	</div>
</section>

<style lang="scss">
	.problem_solution .grid {
		.content_group {
			padding: $space-500 0;
			border-top: $border-width solid $color-brand-dark-lighter;
		}
		
		/* Large screens layout */
		@media(min-width: $breakpoint-lg) {
			& {					
				.content_group {
					grid-column: 1/2;
					grid-row: 1/2;
					
					&:last-child {grid-column: 2/2;grid-row:2/2}
				}
			}
		}
	}
	
</style>