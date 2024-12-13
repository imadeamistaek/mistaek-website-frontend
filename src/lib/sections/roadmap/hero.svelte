<script>
	import Badge from "$lib/components/badge.svelte";
</script>

<section id="hero" class="hero -roadmap" aria-labelledby="hero-heading">
	<Badge label="version 1.0" customClass="-outline"/>
	<h1 class="display_heading">Roadmap</h1>
</section>

<style>
	section.hero.-roadmap {container-type: inline-size; overflow: hidden;}
	section.hero.-roadmap h1 { margin-bottom: var(--space-300); font-family: var(--typeface-family-highlight); font-size: 23cqw;}
	@media (min-width: 992px) {
		section.hero.-roadmap {
			padding: var(--space-1000) 0 0;
			justify-content: center;
			text-align: center;
			align-items: center;
		}
	}
</style>