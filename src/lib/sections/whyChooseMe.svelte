<script>
	import SectionIdentifier from "../components/sectionIdentifier.svelte";	
    import TestimonialContent from "../components/testimonialContent.svelte";
</script>

<section class="section why_choose">
	<div class="content">

		<div class="row">
			<div class="content_group -borderless">
				
				<SectionIdentifier letter="D" label="Why Choose Me?"/>
				<div class="heading_group">
					<p class="body_text -large -subtle">Detail-oriented, approachable, and solution-driven</p>
					<h4>I’m committed to delivering results that matter. With a focus on accessibility and usability, I create designs that not only look good but also work flawlessly.</h4>
				</div>
				
			</div>
		</div>

		<div class="row">
			<div class="content_group -borderless">

				<div class="paragraph_group -horizontal">
					<p class="body_text -medium -subtle">
						My background in design systems means I know how to keep things organised and scalable, ensuring your brand grows consistently.
					</p>
					<p class="body_text -medium -subtle">
						Plus, I’m easy to talk to and love making the process as smooth and enjoyable as possible.
					</p>
				</div>

				<div class="testimonials">
					
					<h5>Hear from those who’ve worked with me</h5>
					
					<div class="grid -testimonials">
	
						<TestimonialContent
							photo="img_orange_flowers.avif" 
							altText="Flowers" 
							name="Name" 
							quote="This platform makes booking a stay so easy and secure. I found the perfect place to stay for my vacation, and the experience was unforgettable." 
						/>
						<TestimonialContent
							photo="img_orange_flowers.avif" 
							altText="Flowers" 
							name="Name" 
							quote="This platform makes booking a stay so easy and secure. I found the perfect place to stay for my vacation, and the experience was unforgettable." 
						/>
						<TestimonialContent
							photo="img_orange_flowers.avif" 
							altText="Flowers" 
							name="Name" 
							quote="This platform makes booking a stay so easy and secure. I found the perfect place to stay for my vacation, and the experience was unforgettable." 
						/>
						<TestimonialContent
							photo="img_orange_flowers.avif" 
							altText="Flowers" 
							name="Name" 
							quote="This platform makes booking a stay so easy and secure. I found the perfect place to stay for my vacation, and the experience was unforgettable." 
						/>
						
					</div>

				</div>

			</div>
			
		</div>
	</div>
</section>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: $space-500;

		.row {
			&:first-child {
				.content_group {
					width: 100%;

					@media(min-width: $breakpoint-lg) {
						& {width: 50%;}
					}
				}
			}
			&:last-child {
				justify-content: flex-end;

				.content_group {
					width: 100%;
					padding-top: 0;

					.testimonials {
						h5 {margin: $space-1000 0 $space-500;}
					}

					@media(min-width: $breakpoint-lg) {
						& {width: 50%;}
					}

				}
			}
		}
	}
</style>