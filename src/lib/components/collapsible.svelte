<script>
	// export let items = [];
	let isOpen = false;
	
	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="collapsible">
	
	<button id="collapsible-title" class="heading" on:click={toggle} aria-expanded={isOpen}>
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
	</button>
	
	<div class="items fade-in {isOpen ? '-open' : ''}" role="region" aria-labelledby="collapsible-title">
		<div class="collapsible_content">
			<slot></slot>
		</div>
	</div>
	
</div>

<style lang="scss">
	.collapsible {
		.heading {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: $space-200 0;
			background-color: transparent;
			border: none;
			user-select: none;
			text-decoration: none;
			border-radius: $border-radius-xlg;
			outline: none;
			cursor: pointer;
			
			&:focus-visible {
				outline: 3px solid $color-neutral-400;
				box-shadow: 0 0 0 6px $color-brand-accent;
			}
			
			.icon {display: block;}
		}
		
		.items {
			max-height: 0;
			overflow: hidden;
			transition: max-height $transition-duration-fast $transition-timing-function;
			
			&.-open {max-height: 200px;}
			
			:global(.collapsible_content ul) {
				display: flex;
				flex-direction: column;
				padding: 0;
				margin: 0;
				list-style: none;
			}
			:global(.collapsible_content ul li) {
				display: inline-flex;

				&::before {
					content: '';
					display: inline-block;
					width: 4px;
					height: 4px;
					-moz-border-radius: 8px;
					-webkit-border-radius: 8px;
					border-radius: 8px;
					background-color: $color-neutral-300;
					margin-right: 8px;
					margin-top: 10px;
				}
			}
			:global(.collapsible_content ul li p) {
				flex: 1;
			}
		}
		
		/* Large screens layout */
		@media(min-width: $breakpoint-lg) {
			& {		
				.heading {
					pointer-events: none;
					
					.icon {display: none;}
				}
				.items {
					max-height: none;
					overflow: visible;
				}
			}
		}
	}
</style>