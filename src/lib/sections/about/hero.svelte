<section id="hero" class="hero -about" aria-labelledby="hero-heading">
	<h1 class="display_heading">Mistaek</h1>
</section>

<style lang="scss">
	.hero.-about {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		padding: $space-1000 0;
		text-align: center;
		background: {
			image: url('/background-grid-top.png');
			repeat: no-repeat;
			position: bottom;
		}
		container-type: inline-size;
		overflow: hidden;
		
		h1 {
			margin-bottom: $space-300;
			font-family: $typeface-family-highlight;
			font-size: 28cqw;
		}
		
		@media(min-width: $breakpoint-lg) {
			& {
				padding: $space-1000 0 0 0;
				justify-content: center;
				text-align: center;
			}
		}
	}
</style>