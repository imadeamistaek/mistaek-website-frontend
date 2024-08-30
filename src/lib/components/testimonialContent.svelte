<script>
	export let photo = ''; // URL or path to the photo
	export let altText = 'Testimonial photo'; // Alt text for the image
	export let name = 'name'; // Default name
	export let quote = 'quote'; // Default quote
</script>

<div class="testimonial_content">
	<img src={photo} alt={altText} class="testimonial-photo" />
	<p class="body_text -small -subtle">{name}</p>
	<p class="body_text -medium">"{quote}"</p>
</div>

<style lang="scss">
	.testimonial_content {
		display: flex;
		flex-direction: column;
		gap: $space-100;
			
		img {
			max-width: 80px;
			width: 100%;
			display: block;
			aspect-ratio: 4 / 5;
			object-fit: cover;
			margin-bottom: $space-300;
		}
	}
</style>