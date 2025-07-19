<script>
	import ContentCard from "$lib/components/contentCard.svelte";
</script>

<section id="about" class="section about" aria-labelledby="about-heading">
	<span class="tag -border"><p class="body_text -micro">About this Checklist</p></span>
	<h2 class="display_heading col-9">Design Systems can save your team<span class="highlight"> — or slow it down.</span></h2>
	<p class="body_text -medium -subtle col-5">A Design System is a powerful tool — but only when it matches your product’s stage and your team’s needs. This quick checklist helps you understand if now is the right time, and what pieces you might be missing.</p>

	<div class="row">
		<ContentCard number="01" heading="[Clarity] over complexity" description="It breaks down the key questions into plain language — no jargon, no endless theory. Just what you need to make a smart decision."/>
		<ContentCard number="02" heading="Build what matters [first]" description="It helps you spot what will actually move the needle for your team — and what can wait. No wasted work. No bloated systems."/>
		<ContentCard number="03" heading="Make it [sustainable]" description="A good Design System should grow with your product. This checklist helps you think about accessibility, usability, and scaling from the start."/>
	</div>
</section>

<style>
	section.about { align-items: center; text-align: center; }
	section.about h2 { margin-bottom: var(--space-300); font-family: var(--typeface-family-highlight);}
	@media (min-width: 992px) {
		section.about {
			padding: var(--space-max) 0;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}
</style>