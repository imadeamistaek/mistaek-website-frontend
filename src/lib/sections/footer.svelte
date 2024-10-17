<script>
    import ActionLink from "../components/actionLink.svelte";
	import FooterAside from '../components/footerAside.svelte';
</script>

<footer>
	<div class="row">
		
		<main>
			<h3 class="col-6">Ready to create <span class="highlight">something amazing</span>?</h3>
			<p class="body_text -large -subtle col-4">Let’s connect. Book a free introductory call with us and start your journey toward a clear, user-friendly design that makes a difference.</p>
	
			<ActionLink url="https://cal.com/mistaek/15min" customClass="action -filled" label="Book an intro call" icon="arrow-out" />
	
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
		padding: $space-600 0;
		background: {
			image: url('/background-grid-top.png');
			repeat: no-repeat;
			position: 100% -144%;
		}

		.row {
			display: flex;
			flex-direction: column;
			padding: 0;

			main {
				flex: 2;
				display: flex;
				align-items: flex-start;
				gap: $space-300;
			}
			aside {
				flex: 1;
			}

			&.-footnote {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: $space-300 0;
				text-align: center;
			}

			@media(min-width: $breakpoint-lg) {
				& {flex-direction: row;}
			}
		}


		@media(min-width: $breakpoint-lg) {
			& {padding: $space-1000 0 0;}
		}
	}
</style>