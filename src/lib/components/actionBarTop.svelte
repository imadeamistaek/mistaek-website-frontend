<script>
	const links = [
	// { item: '1', label: 'About', url: 'https://www.instagram.com/andresequeira__' },
	{ item: '1', label: 'Blog', url: 'https://www.blog.mistaek.com/' }
	];
</script>

<div class="action_bar -top">
	<div class="container">
		
		<a href="./" rel="noopener noreferrer" aria-label="Home">
			<h6 class="brand">Mistaek</h6>
		</a>
		
		<ul class="navigation-links">
			{#each links as { item, label, url }}
			<li>
				<a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
					<p class="body_text -nano">( {item} )</p>
					<h6 class="navigation_item">{label}</h6>
				</a>
			</li>
			{/each}
		</ul>
		
	</div>
</div>

<style lang="scss">
	.action_bar {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
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
				bottom: 0;
				width: 80%;
				height: 1px;
				margin: 0 auto;
				background: radial-gradient(62.87% 100% at 50% 100%, $color-brand-dark-lighter 0%, rgba(255, 255, 255, 0) 100%);
			}
			
			@media(min-width: $breakpoint-xl) {
				& {padding: $space-300 0;}
			}
			a {
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				color: $color-neutral-100;
				text-decoration: none;
			}
			
			.navigation-links {
				list-style: none;
				display: flex;
				
				li {
					margin-left: $space-200;
					
					a {
						display: flex;
						flex-direction: row;
						align-items: flex-start;
						color: $color-neutral-100;
						text-decoration: none;
						
						h6 {
							position: relative;
							white-space: nowrap;
							
							&::after {
								content: '';
								position:absolute;
								width: 100%;
								height: 1px;
								background-color: $color-neutral-100;
								top: 100%;
								left: 0;
								pointer-events: none;
								transform-origin: 100% 50%;
								transform: scale3d(0, 1, 1);
								transition: transform $transition-duration-fast;
								transition-timing-function: $transition-timing-function;
							}
							
							&:hover {
								&::after {
									transform-origin: 0% 50%;
									transform: scale3d(1, 1, 1);
								}
							}
						}
						
						p { margin-right: $space-50; }
					}
				}
			}
			
		}
	}
</style>
