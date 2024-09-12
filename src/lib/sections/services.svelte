<script>
	import NumberedContent from "../components/numberedContent.svelte";
	import SectionIdentifier from "../components/sectionIdentifier.svelte";
</script>

<section class="section services" aria-labelledby="services-heading">
	<div class="content">
		<div class="row -vertical">
						
			<div class="col">

				<header class="section_heading">
					<SectionIdentifier letter="C" label="Services tailored to your needs"/>
					<h4>Whether you’re starting from scratch or looking to refresh your brand, we offer a range of services designed to help you succeed:</h4>
				</header>

			</div>

			<div class="col">
				
				<div class="grid">
					<NumberedContent
					identifier="01."
					heading="Design Systems & DesignOps"
					description="Scalable, efficient systems that ensure consistency across your brand."
					/>
					<NumberedContent
					identifier="02."
					heading="UX/UI & Product design"
					description="User-centered designs that enhance usability and create seamless experiences."
					/>
					<NumberedContent
					identifier="03."
					heading="Web Design"
					description="Crafting responsive, visually engaging websites that connect with users across all devices."
					/>
					<NumberedContent
					identifier="04."
					heading="Branding"
					description="Building a cohesive brand identity that resonates with your audience."
					/>
				</div>

			</div>
			
		</div>
	</div>
</section>

<style lang="scss">
	.row .col {
		> * { width: 100%;}

		@media(min-width: $breakpoint-lg) {
			&:first-child {
				display: flex;
				justify-content: flex-start;
			}
			&:last-child {
				display: flex;
				justify-content: flex-end;
			}

			> * { width: 50%;}
		}
	}
</style>