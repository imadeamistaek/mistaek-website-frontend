<script>
	import ProjectCase from "../components/projectCase.svelte";
	import SectionIdentifier from "../components/sectionIdentifier.svelte";	
</script>

<section class="section trusted_by">
	<div class="content">
		<div class="row -vertical">
			
			<div class="content_group -borderless -horizontal">
				
				<div class="heading_group">
					<SectionIdentifier letter="F" label="Trusted by forward-thinking companies"/>
					<h4>My clients love the clarity, creativity, and results I bring to the table.</h4>
				</div>
				
				<div class="text_group -subtle">
					<h5>Fidelidade, OK! Teleseguros, BiG, Pedigree, Whiskas, BBDO, Smart, Mercedes-Benz, C.Santos VP, Young Lions PT, ComOn, Redbull, Solinca, Jerónimo Martins, Esporão, Troia Resort, Fox, FC. Porto, CUF, FFMS, Santander, Interaction Design Foundation (IxDF)</h5>
					<p class="body_text -small -subtle">+ and more</p>
				</div>
				
			</div>
			
			<div class="content_group -borderless">
				<ProjectCase />
			</div>
			
		</div>
	</div>
</section>

<style lang="scss">
	.trusted_by .content_group {
		display: flex;
		gap: $space-500;

		> * {flex: 1;}

		.text_group {
			padding-top: $space-0;

			@media(min-width: $breakpoint-lg) {
				& {padding-top: $space-1000;}
			}
		}
	}
</style>