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

<style lang="scss">
	.testimonial_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: $space-300;
		padding: $space-max 0;
		background: {
			image: url('/background-grid-testimonial.png');
			repeat: no-repeat;
			position: center;
			size: 140%;
		}

		.quote {
			p.h6 { text-align: center; margin-bottom: $space-300; }

			p:first-child::before { content: '" '; }
			p:last-child::after { content: '" '; }
		}


		.author {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: $space-200;
			
			img {
				max-width: 48px;
				max-height: 48px;
				width: 100%;
				display: block;
				object-fit: cover;
				border: $border-width solid $color-brand-dark-lighter;
				border-radius: $border-radius-max;
			}

			p a {display: inline-block;}
		}
			
	}
</style>