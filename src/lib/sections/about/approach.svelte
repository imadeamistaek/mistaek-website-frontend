<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section class="section approach col-8" aria-labelledby="approach-heading">
	
	<SectionIdentifier label="A personalised approach, every time"/>
	
	<header>
		<h4>At Mistaek, we believe that great design isn’t just about how things look, but how they work. It’s about crafting thoughtful solutions that drive growth and build connections. Simplicity and clarity are at the heart of everything we do, ensuring our work is as impactful as it is beautiful.</h4>
		<p class="body_text -medium -subtle col-5">While I (André) personally lead every project, I collaborate with a trusted network of professionals to deliver the best results.</p>
		<p class="body_text -medium -subtle col-5">
			Together, we create brands that not only stand out but resonate deeply with audiences. You can learn more about our detailed process on the
			<a href="/" aria-label="Homepage">
				<p class="body_text -medium">homepage</p>
			</a>.
		</p>
	</header>

	<img src="/background-grid-testimonial.png" alt="pattern" class="background" />

</section>

<style>
	section.approach {
		position: relative;
		align-items: center;
		justify-content: center;
		gap: var(--space-300);
	}
	section.approach header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-400);
		text-align: left;
	}

	section.section.approach header p a {
		display: inline-flex;
	}
	section.approach img.background {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 90vw;
		margin: auto;
		z-index: -1;
	}

	@media (min-width: 992px) {
		.section.approach { padding: var(--space-1000) 0; }
		.section.approach header { text-align: center; }
	}
</style>
