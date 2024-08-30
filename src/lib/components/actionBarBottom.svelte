<script>
    import LinkEmail from "./linkEmail.svelte";
</script>

<div class="action_bar -bottom">
	
	<div class="slot -left">
		<p class="body_text -micro">Working remotely from Setúbal, PT (GMT+0)</p>
	</div>

	<div class="slot -right">
		<p class="body_text -micro">Available for new projects</p>
		<LinkEmail />
	</div>

</div>

<style lang="scss">
	.action_bar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		max-width: $max-width-container;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: $space-300;
		margin: 0 auto;
		z-index: $zindex-fixed;
		box-sizing: border-box;

		.slot {
			flex: 1;

			&.-right {
				display: flex;
				align-items: flex-end;
				justify-content: flex-end;
				flex-direction: column;
			}
		}
	
		@media(min-width: $breakpoint-xl) {
			& {
				padding: $space-300 0;
				.slot.-right {
					flex-direction: row;

					p { margin-right: $space-300; }
				}
			}
		}
	
	}
	</style>