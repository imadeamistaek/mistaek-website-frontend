<script>
	export let heading = ''; //default heading for the card
	export let description = []; // Array of strings
</script>

<article class="patterned_card">
	<div class="slot -top">
		<p class="body_text -large">{heading}</p>
		<div class="paragraph">
			{#each description as paragraph, index}
				<p class="body_text -small -subtle">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
	<div class="slot -middle">
		<slot />
	</div>
</article>

<style lang="scss">
	.patterned_card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: $space-400;
		padding: $space-400 $space-300;
		border: $border-width solid $color-brand-dark-lighter;
		border-radius: $border-radius-xlg;
		background: {
			image: url('/background-grid-testimonial.png');
			repeat: no-repeat;
			position: center;
			size: 150%;
		}
		transition: {
			property: border;
			duration: $transition-duration-fast;
			timing-function: $transition-timing-function;
		}

		&:hover {
			border-color: lighten($color-brand-dark-lighter, 8%);
		}
		
		.slot {
			display: flex;
			flex-direction: column;
			gap: $space-200;
			padding: 0;
			
			&.-top {gap: $space-100;}

			.paragraph {
				p:not(:last-child) { margin-bottom: $space-200; }
			}
			
			@media(min-width: $breakpoint-lg) {
				& {padding: 0 $space-600;}
			}
		}
	}
</style>