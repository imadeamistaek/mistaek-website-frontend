<script>
	import ActionLink from "./actionLink.svelte";
</script>

<article class="project_card">
	<div class="slot -top">
		<p class="h6">Already have a project in the works?</p>
		<p class="body_text -small">Whether it’s a brand refresh, website redesign, or specific design tasks, we’ll collaborate closely to take your project to the next level. Let’s refine your vision and make sure everything aligns with your brand’s goals.</p>
	</div>
	<div class="slot -middle">
		<ActionLink url="https://cal.com/mistaek/15min" customClass="action -outline" label="Book a call" icon="arrow-out" />
	</div>
</article>

<style lang="scss">
	.project_card {
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
			
			p.h6 {color: $color-brand-accent;}
			
			@media(min-width: $breakpoint-lg) {
				& {padding: 0 $space-600;}
			}
		}
	}
</style>