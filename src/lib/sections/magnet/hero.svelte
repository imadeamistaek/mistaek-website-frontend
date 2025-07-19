<script>
	import ActionButton from "$lib/components/actionButton.svelte";
</script>

<section id="hero" class="hero -magnet" aria-labelledby="hero-heading">
	<span class="tag -border"><p class="body_text -micro">Startup Design System Checklist</p></span>
	<h1 class="display_heading">Is your startup ready for a Design System?</h1>
	<p class="body_text -medium -subtle col-5">This quick, no-fluff checklist helps you find out if it’s the right time to build a Design System — and where to start if it is.</p>
	<ActionButton customClass="action -filled" label="Start the Checklist" anchor="#pricing-section"/>
</section>

<style>
	section.hero.-magnet {container-type: inline-size; overflow: hidden;}
	section.hero.-magnet h1 { margin-bottom: var(--space-300); font-family: var(--typeface-family-highlight); font-size: 8cqw;}
	@media (min-width: 992px) {
		section.hero.-magnet {
			padding: var(--space-max) 0;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}
</style>
