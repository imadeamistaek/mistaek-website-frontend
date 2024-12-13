<script>
	import { links } from "$lib/utils/links";
	import ActionLink from "./actionLink.svelte";
	import ActionButton from "$lib/components/actionButton.svelte";

	// Define an array of social links with their labels and URLs
	const socialLinks = [
		{ label: 'Instagram', url: 'https://www.instagram.com/andresequeira__' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/company/mistaek-design-studio/' },
		{ label: 'YouTube', url: 'https://www.youtube.com/@Mistaek' }
	];

	// TIME FUNCTION
	let portugalTime;

	function updateTime() {
        const now = new Date();
        const options = { 
            timeZone: 'Europe/Lisbon', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false // 24-hour format
        };
        portugalTime = new Intl.DateTimeFormat('en-GB', options).format(now);
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Run the updateTime function on mount to show the initial time
    updateTime();
</script>

<footer>

	<div class="row -top">
		<div class="slot">
			<h3 class="col-6">Ready to create <span class="highlight">something amazing</span>?</h3>
			<p class="body_text -large -subtle col-4">Let’s connect. Book a free introductory call with us and start your journey toward a clear, user-friendly design that makes a difference.</p>
			<ActionLink url="https://cal.com/mistaek/15min" customClass="action -filled" label="Book an intro call" icon="arrow-out" />
		</div>
	</div>

	<div class="row -grid -center">
		<div class="slot -left">
			<div class="pairing -vertical -al">
				<p class="body_text -nano -subtle">Sitemap</p>
				<ul class="navigation_links">
					{#each links as link}
					<li>
						<a href={link.url} target={link.isExternal ? "_blank" : ""} rel={link.isExternal ? "noopener noreferrer" : ""} aria-label={link.label}>
							<p class="body_text -micro navigation_item">{link.label}</p>
						</a>
					</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="slot -center">
			<div class="pairing -vertical">
				<p class="body_text -nano -subtle">Stay connected</p>
				<ul class="navigation_links -social" role="list">
					{#each socialLinks as { label, url }}
					<li>
						<a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
							<p class="body_text -micro navigation_item">{label}</p>
						</a>
					</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="slot -right">
			<div class="pairing -vertical">
				<p class="body_text -nano -subtle">Our Newsletter</p>
				<p class="body_text -micro">Subscribe our newsletter and explore more about our services</p>
				<!-- <script src="https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js" data-label-1="landing_page" data-button-color="#F24F2D" data-button-text-color="#FFFFFF" data-site="https://www.blog.mistaek.com/" data-locale="en" async></script> -->
				<iframe title="beehiv-submit" src="https://embeds.beehiiv.com/f43b562c-d2a8-470f-aa76-89c70ce2417d?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style="width: 100%; margin: 0; border-radius: 0px !important; background-color: transparent; margin-top: 16px;"></iframe>
			</div>
		</div>
	</div>
	
	<div class="row -grid -bottom">
		<div class="slot -left">
			<div class="pairing -vertical -al">
				<p class="body_text -nano -subtle">Working remotely from Setúbal, Portugal</p>
				<p class="body_text -nano -subtle">Current time: {portugalTime}</p>
			</div>
		</div>
		<div class="slot -center">
			<div class="pairing -vertical">
				<p class="body_text -nano -subtle">Availability</p>
				<p class="body_text -nano -subtle">Currently available</p>
			</div>
		</div>
		<div class="slot -right">
			<div class="pairing -vertical -ar">
				<p class="body_text -nano -subtle">© 2024 Mistaek</p>
				<p class="body_text -nano -subtle">All rights reserved.</p>
			</div>
			<ActionButton customClass="action -subtle" icon="arrow-up" anchor="#hero"/>
		</div>
	</div>
</footer>
