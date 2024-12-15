<script>
	import ActionLink from "./actionLink.svelte";
    import Badge from "./badge.svelte";
	import Collapsible from "./collapsibleItem.svelte";

	export let hasBadge = false;
	
	export let name;
	export let description;
	export let value;
	export let items = [];
</script>

<article class="service_card">
	<div class="slot -top">
		{#if hasBadge}
		<Badge customClass="-default" label="Best Option" />
		{/if}
		<p class="h6">{name}</p>
		<p class="body_text -small -subtle">{description}</p>
	</div>
	<div class="slot -middle">
		<p class="h2">{value}</p>
		<ActionLink url="https://cal.com/mistaek/15min" customClass="action -outline" label="Book a call" icon="arrow-out" />
	</div>
	<div class="slot -bottom">
		<Collapsible>
			<ul>
				{#each items as item}
					<li><p class="body_text -small -subtle">{item}</p></li>
				{/each}
			</ul>
		</Collapsible>
	</div>
</article>

<style>
	.service_card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-400);
		padding: var(--space-400) var(--space-300);
		border: var(--border-width) solid var(--color-brand-dark-lighter);
		border-radius: var(--border-radius-xlg);
		transition-property: border;
		transition-duration: var(--transition-duration-fast);
		transition-timing-function: var(--transition-timing-function);
	}
	.service_card:hover {
		border: var(--border-width) solid var(--color-neutral-300);
	}

	.service_card .slot {
		display: flex;
		flex-direction: column;
		gap: var(--space-200);
		width: 100%;
	}

	.service_card .slot.-top {
		gap: var(--space-100);
	}

	@media (min-width: 992px) {
		.service_card .slot {
			width: auto;
		}
	}

	:global(.service_card .badge) {
		position: absolute;
		top: var(--space-100);
		right: var(--space-100);
	}
</style>
