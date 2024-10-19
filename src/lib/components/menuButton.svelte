<!-- MenuButton.svelte -->
<script>
	import { createEventDispatcher } from "svelte";
	export let icon = 'menu'; // default icon name for the menu button
	export let label = ''; // optional label prop
	export let customClass = ''; // optional custom classes
	
	const dispatch = createEventDispatcher();
	
	const handleClick = () => {
		// Dispatch a custom event to toggle the modal
		dispatch('toggle');
	};
</script>

<button class={`action ${customClass}`} on:click={handleClick}>
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-${icon}.webp`} alt={icon}>
	</i>
	{#if label}
	<span>{label}</span>
	{/if}
</button>

<style lang="scss">
	button {
		display: flex;

		@media(min-width: $breakpoint-xl) {
			& {
				display: none;
			}
		}
	}
</style>