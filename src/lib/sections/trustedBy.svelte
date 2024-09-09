<script>
	import ProjectCase from "../components/projectCase.svelte";
	import SectionIdentifier from "../components/sectionIdentifier.svelte";	
</script>

<section class="section trusted_by" aria-labelledby="trusted-by-heading">
	<div class="content">
		<div class="row -vertical">
			
			<div class="content_group -borderless -horizontal">
				
				<header class="heading_group">
					<SectionIdentifier letter="F" label="Trusted by forward-thinking companies"/>
					<h4>My clients love the clarity, creativity, and results I bring to the table.</h4>
					<p class="body_text -medium -subtle">
						Over the years, I've had the privilege of partnering with forward-thinking brands across multiple areas. Together, we've turned complex challenges into clear, impactful designs that engage audiences and deliver measurable results. Each collaboration is built on trust, creativity, and a shared vision for growth.
					</p>
				</header>
				
				<div class="text_group -subtle">
					<!-- <h5>Fidelidade, OK! Teleseguros, BiG, Pedigree, Whiskas, BBDO, Smart, Mercedes-Benz, C.Santos VP, Young Lions PT, ComOn, Redbull, Solinca, Jerónimo Martins, Esporão, Troia Resort, Fox, FC. Porto, CUF, FFMS, Santander, Interaction Design Foundation (IxDF)</h5> -->
					<ul>
						<li><h5>Fidelidade</h5></li>
						<li><h5>OK! Teleseguros</h5></li>
						<li><h5>BiG</h5></li>
						<li><h5>Pedigree</h5></li>
						<li><h5>Whiskas</h5></li>
						<li><h5>BBDO</h5></li>
						<li><h5>Smart</h5></li>
						<li><h5>Mercedes-Benz</h5></li>
						<li><h5>Young Lions PT</h5></li>
						<li><h5>ComOn</h5></li>
						<li><h5>Redbull</h5></li>
						<li><h5>Solinca</h5></li>
						<li><h5>Jerónimo Martins</h5></li>
						<li><h5>Troia Resort</h5></li>
						<li><h5>CUF</h5></li>
						<li><h5>FFMS</h5></li>
						<li><h5>Santander</h5></li>
						<li><h5>Interaction Design Foundation (IxDF)</h5></li>
					</ul>
					<p class="body_text -medium -subtle">+ and more</p>
				</div>
				
			</div>
			
			<!-- <div class="content_group -borderless">
			<ProjectCase />
			</div> -->
			
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
			
			ul {
				display: inline-flex;
				flex-wrap: wrap;
				gap: $space-100;
				padding-left: $space-0;
				list-style: none;
				
				li {
					display: flex;
					align-items: center;
					
					&::before {
						content: '';
						width: $space-100;
						height: $space-100;
						border-radius: $border-radius-max;
						background: $color-brand-dark-lighter;
						margin-right: .5rem;
					}
					
				}
			}
			
			@media(min-width: $breakpoint-lg) {
				& {padding-top: $space-1000;}
			}
		}
	}
</style>