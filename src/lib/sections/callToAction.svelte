<script>
	import ButtonEmail from '../components/buttonEmail.svelte';
</script>

<section class="section callToAction" aria-labelledby="call-to-action-heading">
	<div class="row">
		
		<main>
			<h3>Ready to <span class="highlight">elevate your brand</span> with purposeful design?</h3>
			<div class="paragraph_group -horizontal">
				<p class="body_text -large -subtle">
					We help forward-thinking companies like yours create user-friendly, impactful brands that drive growth. From web design to UX/UI solutions, We're here to bring your vision to life.
				</p>
				<p class="body_text -large -subtle">
					Our approach is collaborative and clear. Let's discuss how our design expertise can turn your business challenges into growth opportunities.
				</p>
			</div>
	
			<ButtonEmail />
	
		</main>

	</div>
</section>

<style lang="scss">
	section {
		padding: $space-1000 0;
		background: {
			image: url('/background-grid-top.png');
			repeat: no-repeat;
			position: right;
		}

		.row {
			display: flex;
			flex-direction: column;

			main {
				flex: 3;
				display: flex;
				align-items: flex-start;
				gap: $space-300;

				> * {
					max-width: 720px;
				}
			}

			@media(min-width: $breakpoint-lg) {
				& {flex-direction: row;}
			}
		}


		@media(min-width: $breakpoint-lg) {
			& {padding: 160px 0;}
		}
	}
</style>