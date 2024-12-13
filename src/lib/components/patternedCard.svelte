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

<style>
	.patterned_card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-400);
		padding: var(--space-400) var(--space-300);
		border: var(--border-width) solid var(--color-brand-dark-lighter);
		border-radius: var(--border-radius-xlg);
		background-image: url('/background-grid-testimonial.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 150%;
		transition-property: border;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}
	.patterned_card:hover {
		border: var(--border-width) solid var(--color-neutral-300);
	}

	.patterned_card .slot {
		display: flex;
		flex-direction: column;
		gap: var(--space-200);
		padding: 0;
	}
	.patterned_card .slot.-top {
		gap: var(--space-100);
	}
	.patterned_card .slot .paragraph p:not(:last-child) {
		margin-bottom: var(--space-200);
	}

	@media (min-width: 992px) {
		.patterned_card .slot {
			padding: 0 var(--space-600);
		}
	}
</style>