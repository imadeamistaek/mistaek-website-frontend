<script>
	import ButtonEmail from '../components/buttonEmail.svelte';
    import FooterAside from '../components/footerAside.svelte';
</script>

<footer>
	<div class="row">
		
		<main>
			<h3>Ready to create <span class="highlight">something amazing</span>?</h3>
			<p class="body_text -large -subtle">Let’s work together to build a brand that stands out, drives growth, and inspires change. Send me a message, and I’ll get back to you as soon as possible.</p>
	
			<ButtonEmail />
	
		</main>
	
		<aside>
			<FooterAside />
		</aside>

	</div>
	<div class="row -footnote">
		
		<p class="body_text -nano -footnote"><small>©2024 Mistaek. All rights reserved.</small></p>

	</div>
</footer>

<style lang="scss">
	footer {
		padding: $space-1000 0;

		.row {
			display: flex;
			flex-direction: column;

			main {
				flex: 3;
				display: flex;
				align-items: flex-start;
				gap: $space-300;

				> * {
					max-width: 560px;
				}
			}
			aside {
				flex: 1;
			}

			&.-footnote {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: $space-300 0;
				border-top: $border-width solid $color-brand-dark-lighter;
			}

			@media(min-width: $breakpoint-lg) {
				& {flex-direction: row;}
			}
		}


		@media(min-width: $breakpoint-lg) {
			& {padding: $space-1000 0 $space-800;}
		}
	}
</style>