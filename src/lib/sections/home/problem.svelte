<script>
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
</script>

<section class="section problem col-8" aria-labelledby="problem-heading">
	
	<SectionIdentifier customClass="-horizontal" icon="challenges" label="Design Challenges are holding you back"/>
	
	<header>
		<h4>Every company faces complex design problems that can make it hard to stand out in competitive markets.</h4>
		<h4>Whether it’s a confusing brand identity or an inconsistent user experience, these issues can slow your growth, hinder user engagement, and make scaling harder than it needs to be.</h4>
		<h4>We understand these challenges and can help you break through them, simplifying the complex and allowing your brand to grow.</h4>
	</header>

</section>

<style lang="scss">
	section.problem {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: $space-400;
		header {
			display: flex;
			flex-direction: column;
			gap: $space-400;
		}
	}
</style>