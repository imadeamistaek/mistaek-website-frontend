<script>
	import ButtonEmail from '$lib/components/buttonEmail.svelte';
</script>

<section class="hero">
	<h1>Empowering <span class="highlight">innovative startups</span> with design that <span class="highlight">drives growth</span></h1>
	<h2>TEST ENVIRONMENT</h2>
	<p class="body_text -large -subtle">I simplify complex design challenges for tech-driven companies focused on health, sustainability, and science, helping you build impactful brands that inspire and connect.</p>
	<ButtonEmail />
</section>

<style lang="scss">
	.hero {
		width: 100%;
		max-width: 960px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: {
			image: url('/background-grid-top.png');
			repeat: no-repeat;
			position: center;
		}

		h1 { margin-bottom: $space-300; }
		p {
			width: 100%;
			max-width: 560px;
			margin-bottom: $space-400;
		}
	}
</style>