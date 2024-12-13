<script>
	let isOpen = false;
	
	function toggle() {
		isOpen = !isOpen;
	}

	export let isStage = false;
	export let stageIndex = '';
	export let stageName = '';
</script>

<div class="collapsible {isStage ? '-stage' : ''}">
	
	<button id="collapsible-title" class="heading" on:click={toggle} aria-expanded={isOpen}>
		{#if isStage}
			<p class="body_text -subtle -nano">{stageIndex}</p>

			<div class="stage_name">
				<p class="h2">{stageName}</p>
				{#if !isOpen}
				<i class="icon -small" aria-hidden="true">
					<img src="/icons/mi-chevron-down.webp" alt="chevron-down">
				</i>
				{:else}
				<i class="icon -small" aria-hidden="true">
					<img src="/icons/mi-chevron-up.webp" alt="chevron-up">
				</i>
				{/if}
			</div>
		{:else}
			<p class="body_text -medium">What's included:</p>
			{#if !isOpen}
			<i class="icon -small" aria-hidden="true">
				<img src="/icons/mi-chevron-down.webp" alt="chevron-down">
			</i>
			{:else}
			<i class="icon -small" aria-hidden="true">
				<img src="/icons/mi-chevron-up.webp" alt="chevron-up">
			</i>
			{/if}
		{/if}
	</button>
	
	<div class="items fade-in {isOpen ? '-open' : ''}" role="region" aria-labelledby="collapsible-title">
		<div class="collapsible_content">
			<slot></slot>
		</div>
	</div>
	
</div>
