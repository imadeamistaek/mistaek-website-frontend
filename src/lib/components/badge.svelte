<script>
	export let label; // Label to be used in the tag
	export let customClass;
</script>

<div class={`badge ${customClass}`}>
	<p class="body_text -nano">{label}</p>
</div>

<style lang="scss">
	.badge {
		display: inline-block;
		border-radius: $border-radius-md;
		padding: $space-50 $space-100;
		
		p {
			&::before {
				content: '';
				display: inline-block;
				width: 8px;
				height: 8px;
				-moz-border-radius: $border-radius-md;;
				-webkit-border-radius: $border-radius-md;;
				border-radius: $border-radius-md;
				background-color: $color-brand-accent;
				margin-right: $space-100;
			}
		}

		// Default variant is used on everything that needs a tag
		// if there is no specific variant that needs to be used
		// eg: services card
		&.-default {
			background-color: rgba($color-brand-accent, 0.16);
			p {
				color: $color-brand-accent;
				&::before {
					background-color: $color-brand-accent;
				}
			}
		}


		// Planned/Validation variants are used in tasks when they are "Yellow"
		&.-planned,
		&.-validation {
			background-color: rgba($color-brand-tangerine, 0.16);
			p {
				color: $color-brand-tangerine;
				&::before {
					background-color: $color-brand-tangerine;
				}
			}
		}

		// Done variant are used in tasks when they are "Green"
		&.-done {
			background-color: rgba($color-brand-turquoise, 0.16);
			p {
				color: $color-brand-turquoise;
				&::before {
					background-color: $color-brand-turquoise;
				}
			}
		}

		// Progress variant are used in tasks when they are "Blue"
		&.-progress {
			background-color: $color-brand-chrysler;
			p {
				color: $color-neutral-100;
				&::before {
					background-color: $color-neutral-100;
				}
			}
		}

				// Outline variants are used in tasks when they are Extra
		&.-outline {
			background-color: transparent;
			border: $border-width solid $color-transparency-on-dark;
			p {
				color: $color-neutral-300;
				&::before {
					display: none;
				}
			}
		}

		&.-subtle {
			background-color: $color-transparency-on-dark;
			border: none;
			p {
				color: $color-neutral-200;
				&::before {
					background-color: $color-neutral-200;
				}
			}
		}
	}
</style>