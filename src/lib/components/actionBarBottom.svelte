<script>
    import LinkEmail from "./linkEmail.svelte";
</script>

<div class="action_bar -bottom">
	<div class="container">
		
		<div class="slot -left">
			<p class="body_text -micro">Working remotely from Setúbal, PT (GMT+1)</p>
		</div>
	
		<div class="slot -right">
			<p class="body_text -micro">Available for new projects</p>
			<LinkEmail />
		</div>

	</div>
</div>

<style lang="scss">
	.action_bar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-backdrop-filter: blur(16px);
		backdrop-filter: blur(16px);
		background: rgba(20, 20, 21, .08);
		
		.container {
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

			&::before {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				width: 80%;
				height: 1px;
				margin: 0 auto;
				background: radial-gradient(62.87% 100% at 50% 100%, $color-brand-dark-lighter 0%, rgba(255, 255, 255, 0) 100%);
			}

			.slot {
				flex: 1;
				align-items: center;
	
				&.-right {
					display: flex;
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

	
	}
	</style>