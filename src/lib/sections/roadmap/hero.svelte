<script>
	import Badge from "$lib/components/badge.svelte";
</script>

<section id="hero" class="hero -roadmap" aria-labelledby="hero-heading">
	<Badge label="version 1.0" customClass="-outline"/>
	<h1 class="display_heading">Roadmap</h1>
</section>

<style lang="scss">
	.hero.-roadmap {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
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
			font-size: 23cqw;
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