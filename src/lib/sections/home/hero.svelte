<script>
	import ActionLink from "$lib/components/actionLink.svelte";
	import ActionButton from "$lib/components/actionButton.svelte";
</script>

<section id="hero" class="hero" aria-labelledby="hero-heading">
	<h1>Empowering <span class="highlight">forward-thinking startups</span> with design that <span class="highlight">drives growth</span></h1>
	<p class="body_text -large -subtle">We specialise in helping early-stage tech companies solve design challenges through clear and user-friendly websites, impactful branding, and seamless digital experiences in <span class="highlight">health</span>, <span class="highlight">sustainability</span>, and <span class="highlight">science</span>—fostering lasting connections and business growth.</p>
	<div class="action_group">
		<ActionButton customClass="action -subtle" label="View Plans & Pricing" anchor="#pricing-section"/>
		<ActionLink url="https://cal.com/mistaek/15min" customClass="action -filled" label="Book an intro call" icon="arrow-out" />
	</div>
</section>

<style lang="scss">
	.hero {
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
			position: center;
		}
		
		h1 { margin-bottom: $space-300; }
		p {
			width: 100%;
			max-width: 640px;
			margin-bottom: $space-600;
			
			.highlight {color: $color-brand-accent;}
		}
		
		.action_group {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $space-200;
		}
		
		@media(min-width: $breakpoint-lg) {
			& {
				height: 80vh;
				padding: 0;
				justify-content: center;
				text-align: left;
				
				.action_group {flex-direction: row;}
			}
		}
	}
</style>