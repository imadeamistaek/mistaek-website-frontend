<script>
	export let letter = 'A'; // Default letter
	export let label = 'Section Label'; // Default label
</script>

<div class="identifier" aria-label="{label}">
	<span class="number"><p class="body_text -nano">{letter}</p></span>
	<p class="body_text -nano">{label}</p>
</div>

<style lang="scss">
	.identifier {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-bottom: $space-500;

		span {
			padding: $space-50 $space-100;
			border-radius: $border-radius-max;
			border: $border-width solid $color-brand-accent;
			margin-right: $space-100;
		}
		p { color: $color-brand-accent; }
	}
</style>