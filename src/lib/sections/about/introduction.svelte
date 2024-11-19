<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section class="section introduction col-8" aria-labelledby="introduction-heading">
	
	<SectionIdentifier label="Who we are"/>
	
	<header>
		<h4>At Mistaek, we believe that great design can turn complexity into clarity.</h4>
		<h4>We’re a forward-thinking studio, helping startups in tech, health, and sustainability create brands that stand out. With a focus on simplicity, we craft experiences that are both memorable and accessible, empowering businesses to grow confidently.</h4>
	</header>

	<div class="paragraph_group -horizontal col-5">
		<p class="body_text -medium -subtle">Founded on the belief that creativity thrives in imperfection, Mistaek was born to help brands grow by embracing challenges.</p>
		<p class="body_text -medium -subtle">We believe that by simplifying the complex, we create space for brands to connect, inspire, and thrive in their industries.</p>
	</div>

</section>

<style lang="scss">
	section.introduction {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: $space-400;

		@media(min-width: $breakpoint-lg) {
			& { align-items: center; }
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

		.paragraph_group {
			padding-top: $space-400;
			align-self: flex-end;

			@media(min-width: $breakpoint-lg) {
				& { padding-top: $space-1000; }
			}
		}
	}
</style>