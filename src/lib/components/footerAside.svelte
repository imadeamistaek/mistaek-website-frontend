<script>
	// Define an array of social links with their labels and URLs
	const links = [
	{ label: 'Instagram', url: 'https://www.instagram.com/andresequeira__', icon: 'Instagram' },
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/andremsequeira/', icon: 'LinkedIn' },
	{ label: 'YouTube', url: 'https://www.youtube.com/@Mistaek', icon: 'YouTube' }
	];
</script>

<div class="content_group -social-media -borderless">
	<p class="body_text -micro -subtle">Stay connected</p>
	<p class="body_text -medium">Follow me on social media for insights, tips, and updates on my latest projects.</p>
	
	<ul class="social-links" role="list">
		{#each links as { label, url, icon }}
		<li>
			<a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
				<p class="body_text -medium">{icon}</p>
			</a>
		</li>
		{/each}
	</ul>	
</div>

<div class="content_group -newsletter -borderless">
	<p class="body_text -micro -subtle">My Newsletter</p>
	<p class="body_text -medium">Subscribe my newsletter and explore more about my services</p>
	<script src="https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js" data-label-1="landing_page" data-button-color="#F24F2D" data-button-text-color="#FFFFFF" data-site="https://www.blog.mistaek.com/" data-locale="en" async></script>
</div>

<style lang="scss">
	
	.-social-media {
		display: flex;
		flex-direction: column;
		gap: $space-100;
		padding: 0;

		.social-links {
			list-style: none;
			padding: 0;
			
			li {
				margin: $space-100 $space-0;
				
				a {
					position: relative;
					display: flex;
					align-items: center;
					text-decoration: none;
					white-space: nowrap;
					
					&::before {
						content: '';
						display: inline-block;
						width: 8px;
						height: 8px;
						-moz-border-radius: 8px;
						-webkit-border-radius: 8px;
						border-radius: 8px;
						background-color: $color-brand-detail;
						margin-right: 8px;
						transition: transform $transition-duration-fast;
						transition-timing-function: $transition-timing-function;
					}

					p { color: $color-brand-detail;}
					
					&:hover {
						&::before {
							transform: scale3d(0.8, 0.8, 0.8);
						}
					}
				}
			}
		}
	}
	.-newsletter {
		display: flex;
		flex-direction: column;
		gap: $space-100;

		.body_text.-micro {
			margin-bottom: $space-300;
		}
	}
</style>