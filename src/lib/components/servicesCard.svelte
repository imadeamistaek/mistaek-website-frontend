<script>
	import ActionLink from "./actionLink.svelte";
    import Badge from "./badge.svelte";
	import Collapsible from "./collapsible.svelte";

	export let hasBadge = false;
	
	export let name;
	export let description;
	export let value;
	export let items = [];
</script>

<article class="service_card">
	<div class="slot -top">
		{#if hasBadge}
		<Badge />
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

<style lang="scss">
	.service_card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: $space-400;
		padding: $space-400 $space-300;
		border: $border-width solid $color-brand-dark-lighter;
		border-radius: $border-radius-xlg;
		transition: {
			property: border;
			duration: $transition-duration-fast;
			timing-function: $transition-timing-function;
		}
		
		.slot {
			display: flex;
			flex-direction: column;
			gap: $space-200;
			
			&.-top {gap: $space-100;}
		}

		:global(.badge) {
			position: absolute;
			top: $space-100;
			right: $space-100;
		}
	}
</style>