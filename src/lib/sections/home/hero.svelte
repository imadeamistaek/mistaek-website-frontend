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

<style>
/* ---------------------------------------------------------------------------------------------------- */
/* HERO */
/* ---------------------------------------------------------------------------------------------------- */
@media (min-width: 768px) {
	.hero {
		/* height: 80vh; */
		padding: var(--space-max) 0;
		justify-content: center;
		text-align: left;
		background-position: center -143%;
	}
}


/* ---------------------------------------------------------------------------------------------------- */
/* HERO Children */
/* ---------------------------------------------------------------------------------------------------- */
.hero h1 { margin-bottom: var(--space-300);}
.hero p { 
	width: 100%;
	max-width: 640px;
	margin: auto;
	margin-bottom: var(--space-600);
}
.hero p .highlight { color: var(--color-brand-accent); }
.hero .action_group {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--space-200);
}
@media (min-width: 768px) {

	.hero p {  margin: 0; }
	.hero .action_group { flex-direction: row; justify-content: flex-start; }
}
</style>
