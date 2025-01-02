<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section id="follow-section" class="section follow" aria-labelledby="problem-heading">
	
	<SectionIdentifier label="Stay in the Loop"/>
	
	<header>
		<h4>Want to follow along as Mistaek evolves?</h4>
		<p class="body_text -medium -subtle col-5">Sign up for our newsletter to get updates every time we complete a task, and a monthly roundup of key milestones and insights. This is a shared journey, and we’re thrilled to have you with us every step of the way.</p>
	</header>
	
	<!-- <script src="https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js" data-label-1="landing_page" data-button-color="#F24F2D" data-button-text-color="#FFFFFF" data-site="https://www.blog.mistaek.com/" data-locale="en" async></script> -->
	<iframe title="beehiv-submit" src="https://embeds.beehiiv.com/f43b562c-d2a8-470f-aa76-89c70ce2417d?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" style="margin: 0; border-radius: 0px !important; background-color: transparent; width: 100%"></iframe>

</section>

<style>
	section.follow { align-items: center; margin-bottom: var(--space-500); }
	section.follow header { text-align: center; gap: 0; margin-bottom: var(--space-500); align-items: center;}
</style>
