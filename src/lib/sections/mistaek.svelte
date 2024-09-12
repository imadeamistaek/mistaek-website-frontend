<script>
	import SectionIdentifier from "../components/sectionIdentifier.svelte";	
</script>

<section class="section mistaek" aria-labelledby="mistaek-heading">
	<div class="content">
		<div class="row">
			
			<div class="content_group -borderless">
				
				<SectionIdentifier letter="G" label="Creative Process"/>
				<div class="heading_group">
					<h4>Embracing <span>mistaeks</span>, fostering innovation</h4>
					<img class="mobile_only" src="img_orange_flowers.avif" alt="Flowers">
					<div class="text_group">
						<p class="body_text -large">I believe that the best ideas often come from the unexpected. That’s why I embrace mistakes as part of the creative process, using them as opportunities to push boundaries and find innovative solutions.</p>
						<p class="body_text -large">This approach not only leads to unique, effective designs but also ensures we’re always learning and evolving.</p>
					</div>
				</div>
				
			</div>
			
			<div class="content_group -borderless">
				<img src="img_orange_flowers.avif" alt="Flowers">
			</div>
			
		</div>
	</div>
</section>

<style lang="scss">
	.content_group { 
		h4 span {
			position: relative;
			
			&:after {
				content: '';
				position:absolute;
				width: 100%;
				height: $space-200;
				background-image: url('mistake.webp');
				bottom: 0%;
				left: 0;
				pointer-events: none;
			}
		}
		
		img {
			width: 100%;
			display: block;
			aspect-ratio: 16 / 9;
			object-fit: cover;
			display: none;

			&.mobile_only {display: block; padding: $space-200 0;}
		}
		
		@media(min-width: $breakpoint-lg) {
			& {
				flex: 1;
				
				img {
					margin-top: $space-800;
					display: block;

					&.mobile_only {display: none;}
				}
			}
		}
	}
</style>