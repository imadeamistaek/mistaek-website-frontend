<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section class="section approach col-8" aria-labelledby="approach-heading">
	
	<SectionIdentifier label="A personalised approach, every time"/>
	
	<header>
		<h4>At Mistaek, we believe that great design isn’t just about how things look, but how they work. It’s about crafting thoughtful solutions that drive growth and build connections. Simplicity and clarity are at the heart of everything we do, ensuring our work is as impactful as it is beautiful.</h4>
		<p class="body_text -medium -subtle col-5">While I (André) personally lead every project, I collaborate with a trusted network of professionals to deliver the best results.</p>
		<p class="body_text -medium -subtle col-5">Together, we create brands that not only stand out but resonate deeply with audiences.</p>
	</header>

	<img src="/background-grid-testimonial.png" alt="pattern" class="background" />

</section>

<style lang="scss">
	section.approach {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: $space-300;

		@media(min-width: $breakpoint-lg) {
			& {padding: $space-1000 0;}
		}

		header {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $space-400;
			text-align: left;

			@media(min-width: $breakpoint-lg) {
				& { text-align: center; }
			}
		}

		img.background {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 90vw;
			margin: auto;
			z-index: -1;
		}
	}
</style>