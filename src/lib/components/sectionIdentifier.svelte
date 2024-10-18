<script>
	export let label = 'Section Label'; // Default label
	export let icon;
	export let customClass = '';
</script>

<div class={`identifier ${customClass}`} aria-label="{label}">
	<i class="icon" aria-hidden="true">
		<img src={`/icons/mi-exp-${icon}.webp`} alt="{icon}">
	</i>
	<p class="body_text -nano">{label}</p>
</div>

<style lang="scss">
	.identifier {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-bottom: $space-500;
		gap: $space-200;

		p { color: $color-brand-accent; }


		&.-horizontal {
			flex-direction: row;

			p {
				display: flex;
				flex-direction: row;
				align-items: center;
				flex: 1;
				gap: $space-200;

				&::after {
					content: '';
					height: 1px;
					flex: 1;
					background-color: $color-brand-accent;
				}
			}
		}

	}
</style>