<script>
    import Badge from "./badge.svelte";1

	export let index; //Number of each task
	export let title; //Title of the task
	export let description; //Description of the task
	export let badgeLabel;
	export let badgeClass;
	export let extraBadgeLabel;
	export let customClass;
</script>

<div class={`task ${customClass}`}>
	<p class="body_text -subtle -nano">{index}</p>
	{#if extraBadgeLabel}
	<div class="pairing_tags">
		<Badge label={badgeLabel} customClass={badgeClass}/>
		<Badge label={extraBadgeLabel} customClass="-outline"/>
	</div>
	{:else}
	<Badge label={badgeLabel} customClass={badgeClass}/>
	{/if}
	<p class="body_text -large">{title}</p>
	<p class="body_text -subtle -small">{description}</p>
</div>

<style>
	.task {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-100);
	}
	.task p.-nano {
		margin-bottom: var(--space-100);
	}

	.task.-done {
		opacity: 64%;
	}
</style>