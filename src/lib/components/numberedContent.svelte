<script>
	export let identifier = '01'; // Default identifier
	export let heading = 'Heading'; // Default heading
	export let description = 'description'; // Default description
</script>

<div class="numbered_content">
	<p class="body_text -subtle -nano">{identifier}</p>	
	<p class="body_text -medium">{heading}</p>
	<p class="body_text -subtle -small">{description}</p>
</div>

<style lang="scss">
	.numbered_content {
		display: flex;
		flex-direction: column;
		gap: $space-100;
		padding: $space-400 $space-300;
		border-top: $border-width solid $color-brand-dark-lighter;

		p:first-child {
			margin-bottom: $space-400;
		}
	}
</style>