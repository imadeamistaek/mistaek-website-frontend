<script>
	// Define an array of social links with their labels and URLs
	const links = [
	{ label: 'Instagram', url: 'https://www.instagram.com/andresequeira__', icon: 'instagram' },
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/andremsequeira/', icon: 'linkedin' },
	{ label: 'YouTube', url: 'https://www.youtube.com/@Mistaek', icon: 'youtube' }
	];
</script>

<style>
	.social-links {
		list-style: none;
		padding: 0;
	}
	
	.social-links li {
		margin: 0 10px;
	}
	
	.social-links a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #000;
		font-size: 24px;
	}
	
	.social-links a::before {
		content: '';
		display: inline-block;
		width: 8px;
		height: 8px;
		-moz-border-radius: 8px;
		-webkit-border-radius: 8px;
		border-radius: 8px;
		background-color: #D4CFC4;
		margin-right: 8px;
	}
	
	.social-links a p {
		margin: 0;
	}
	
	.social-links a:hover {
		color: #007bff;
	}
</style>

<div class="content_group -social-media">
	<p class="body_text -nano">Stay connected</p>
	<p class="body_text -micro">Follow me on social media for insights, tips, and updates on my latest projects.</p>
	
	<ul class="social-links">
		{#each links as { label, url, icon }}
		<li>
			<a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
				<p class="body_text -micro">{icon}</p>
			</a>
		</li>
		{/each}
	</ul>	
</div>

<div class="content_group -newsletter">
	<p class="body_text -nano">My Newsletter</p>
	<p class="body_text -micro">Subscribe my newsletter and explore more about my services</p>
	
	<label for="email">
		Enter your example.com email:
		<script src="https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js" data-label-1="LandingPage" data-button-color="#16161D" data-button-text-color="#FFFFFF" data-site="https://www.mistaek.com/" data-locale="en" async></script>
	</label>
	
</div>