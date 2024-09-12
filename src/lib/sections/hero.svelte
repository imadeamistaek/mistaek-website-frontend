<script>
	import ButtonEmail from '$lib/components/buttonEmail.svelte';
</script>

<section class="hero" aria-labelledby="hero-heading">
	<h1>Empowering <span class="highlight">forward-thinking startups</span> with design that <span class="highlight">drives growth</span></h1>
	<p class="body_text -large -subtle">We create user-friendly websites, impactful branding, and seamless digital experiences for tech companies in health, sustainability, and science—fostering lasting connections and business growth.</p>
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
			max-width: 640px;
			margin-bottom: $space-400;
		}
	}
</style>