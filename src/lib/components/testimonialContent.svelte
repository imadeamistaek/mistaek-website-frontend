<script>
	export let photo = ''; // URL or path to the photo
	export let altText = 'Testimonial photo'; // Alt text for the image
	export let label = 'label'; // Default label
	export let quote = []; // Array of strings
	export let link = 'link'; // Default link
	export let linkLabel = 'linkLabel'; // Default linkLabel
</script>

<div class="testimonial_content col-8">
	<div class="quote">
		{#each quote as paragraph, index}
			<p class="h6">
				{paragraph}
			</p>
		{/each}
	</div>

	<div class="author">
		<img src={photo} alt={altText} class="testimonial-photo" />
		<p class="body_text -micro -subtle">
			{label}
			<a href={link} target="_blank" rel="noopener noreferrer" aria-label={link}>
				<p class="body_text -micro navigation_item">{linkLabel}</p>
			</a>
		</p>
	</div>
</div>

<style>
	.testimonial_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-300);
		padding: var(--space-max) 0;
		background-image: url('/background-grid-testimonial.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 140%;
	}

	.testimonial_content .quote p.h6 {	text-align: center; margin-bottom: var(--space-300);}
	.testimonial_content .quote p:first-child::before {	content: '" ';}
	.testimonial_content .quote p:last-child::after {	content: ' "';}

	.testimonial_content .author {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-200);
	}
	.testimonial_content .author img {
		max-width: 48px;
		max-height: 48px;
		width: 100%;
		display: block;
		object-fit: cover;
		border: var(--border-width) solid var(--color-brand-dark-lighter);
		border-radius: var(--border-radius-max);
	}
	.testimonial_content .author p a { display: inline-block;}
</style>
