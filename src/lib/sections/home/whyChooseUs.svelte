<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import ContentCard from "$lib/components/contentCard.svelte";
	import ActionLink from "$lib/components/actionLink.svelte";
</script>

<section class="section chooseus col-8" aria-labelledby="chooseus-heading">
	
	<SectionIdentifier icon="chooseus" label="Why choose us?"/>
	
	<header>
		<h4>... And we grow with you</h4>
		<p class="body_text -medium -subtle col-6">We don’t just deliver great designs; we built strong relationships. We bring together a network of talented professionals to ensure your project gets the attention it deserves.</p>
		<p class="body_text -medium -subtle col-6">Plus, we understand the value of forward-thinking design that can adapt and grow as your business does.</p>
	</header>
	
	<div class="grid">
		<ContentCard icon="designsystem" heading="Design Systems & DesignOps" description="Scalable, efficient systems that ensure consistency across your brand."/>
		<ContentCard icon="product" heading="UX/UI & Product design" description="User-centered designs that enhance usability and create seamless experiences."/>
		<ContentCard icon="webdesign" heading="Web Design" description="Crafting responsive, visually engaging websites that connect with users across all devices."/>
		<ContentCard icon="branding" heading="Branding" description="Building a cohesive brand identity that resonates with your audience."/>
	</div>
	
	<ActionLink url="https://cal.com/mistaek/15min" customClass="action -filled" label="Book an intro call" icon="arrow-out" />
	
</section>

<style>
	section.chooseus { align-items: center; text-align: center; }
</style>
