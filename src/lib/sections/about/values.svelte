<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ContentCard from "$lib/components/contentCard.svelte";
</script>

<section class="section approach" aria-labelledby="approach-heading">
	
	<SectionIdentifier label="Our impact"/>
	
	<header>
		<h4>A design studio with big impact</h4>
		<p class="body_text -medium -subtle col-5">Whether you have a clear vision or need help shaping it, we’re here to make it happen. Reach out today to discuss how we can create something amazing together.</p>
	</header>
	
	<div class="row">
		<ContentCard number="01" heading="Personalised Service" description="You work directly with me, ensuring your vision is fully realised."/>
		<ContentCard number="02" heading="Scalable Solutions" description="With a network of collaborators, no project is too big or too small."/>
		<ContentCard number="03" heading="Proven Expertise" description="With a background in design systems, UX/UI, and branding, I know how to make your brand work for you."/>
	</div>
	
</section>

<style lang="scss">
	section.approach {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-300;
		text-align: center;
		
		header {
			display: flex;
			flex-direction: column;
			gap: $space-50;
			align-items: center;
		}
	}
</style>