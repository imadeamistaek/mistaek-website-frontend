<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
    import ContentCard from "../../components/contentCard.svelte";
</script>

<section class="section team col-8" aria-labelledby="team-heading">
	
	<SectionIdentifier label="The Team"/>
	
	<header>
		<h4>Meet the in-house team</h4>
		<p class="body_text -medium -subtle col-5">At Mistaek, we don’t just take our work seriously—we also know how to have fun. Meet my two assistants, who bring their unique energy to the studio every day:</p>
	</header>

	<div class="row">
		<ContentCard
			customClass="-no-border -no-padding"
			image="Yoru"
			heading="Yoru, Chief of Playful Inspiration"
			description="Always ready for a walk (or a brainstorming session), Yoru reminds us that creativity thrives when we take breaks and explore new perspectives (and she’s always on time in regards to this)."
		/>
		<ContentCard
			customClass="-no-border -no-padding"
			image="Yuki"
			heading="Yuki, Director of Calm and Focus"
			description="A master of stillness, Yuki knows when it’s time to focus and when it’s time to add a spark of energy to every project. With a keen eye for detail, she ensures we keep our standards high."
		/>
	</div>


</section>

<style>
	section.team { align-items: center; text-align: center; }
	section.team header { gap: var(--space-200); }
	:global(.content_card img) {
		width: 100%;
		display: block;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: var(--border-radius-md);
		margin-bottom: var(--space-200);
	}
</style>
