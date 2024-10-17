<script>
	export let photo = ''; // URL or path to the photo
	export let altText = 'Testimonial photo'; // Alt text for the image
	export let name = 'name'; // Default name
	export let quote = 'quote'; // Default quote
</script>

<div class="testimonial_content">
	<p class="h6">"{quote}"</p>

	<div class="author">
		<img src={photo} alt={altText} class="testimonial-photo" />
		<p class="body_text -micro -subtle">{name}</p>
	</div>
</div>

<style lang="scss">
	.testimonial_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: $space-300;
		padding: $space-1000 160px;
		background: {
			image: url('/background-grid-testimonial.png');
			repeat: no-repeat;
			position: center;
			size: cover;
		}

		p.h6 {
			text-align: center;
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
		}
			
	}
</style>