<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section id="follow-section" class="section follow" aria-labelledby="problem-heading">
	
	<SectionIdentifier label="Stay in the Loop"/>
	
	<header>
		<h4>Want to follow along as Mistaek evolves?</h4>
		<p class="body_text -medium -subtle col-5">Sign up for our newsletter to get updates every time we complete a task, and a monthly roundup of key milestones and insights. This is a shared journey, and we’re thrilled to have you with us every step of the way.</p>
	</header>
	
	<script src="https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js" data-label-1="landing_page" data-button-color="#F24F2D" data-button-text-color="#FFFFFF" data-site="https://www.blog.mistaek.com/" data-locale="en" async></script>

</section>

<style lang="scss">
	section.follow {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-400;
		margin-bottom: $space-500;


		header {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: $space-200;
			margin-bottom: $space-500;
		}

		:global(.gh-signup-root) { width: 100%; }
	}
</style>