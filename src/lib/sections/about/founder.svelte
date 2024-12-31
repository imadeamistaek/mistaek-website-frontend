<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	export let buttonLabel = null; // Default label
</script>

<section class="section founder col-8" aria-labelledby="founder-section">
	
	<figure class="col-3">
		<img src="photoAndreSequeiraBnW.png" alt="André Sequeira" />
		<figcaption>01. André Sequeira, Founder</figcaption>
	</figure>
	
	<div class="details col-5">
		<SectionIdentifier label="Meet the founder"/>
		<h5>I’m André, the creative force behind Mistaek, a design studio dedicated to helping tech-driven startups and companies build brands that stand out and inspire change.</h5>

		{#if buttonLabel}
		<a href="/about" class="action -outline">
			<span>{buttonLabel}</span>
		</a>
		{:else}
		<p class="body_text -medium -subtle">My passion is in helping create clear, user-friendly experiences that resonate. With over 10 years of experience in design, I’m dedicated to turning complex challenges into innovative solutions that fuel growth and inspire change.</p>
		{/if}
	</div>
	
</section>

<style>
	section.founder { align-items: flex-start; }
	@media (min-width: 992px) {
		.founder {
			flex-direction: row; padding: var(--space-1000) 0;
		}
	}

	section.founder figure { margin: 0; max-width: 320px;}
	section.founder figure img {
		width: 100%;
		display: block;
		aspect-ratio: 4/5;
		object-fit: cover;
		object-position: top;
		border-radius: var(--border-radius-md);
	}
	
	section.founder .details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-300);
		align-self: flex-end;
	}
	@media (min-width: 992px) {
		section.founder .details {
			margin-bottom: var(--space-200);
		}
	}

	:global(.identifier) {
		align-items: flex-start;
		text-align: left;
		padding: 0;
	}
</style>
