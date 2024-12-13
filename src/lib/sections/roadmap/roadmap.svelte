<script>
	import { tasks } from "$lib/utils/roadmap";
	import SectionIdentifier from "$lib/components/sectionIdentifier.svelte";
	import StageTask from "$lib/components/stageTask.svelte";
	import Collapsible from "$lib/components/collapsible.svelte";
</script>

<section id="roadmap-section" class="section roadmap col-8" aria-labelledby="roadmap-heading">

	<SectionIdentifier label="Building clarity, one milestone at a time."/>
	
	<header>
		<h4>Our Roadmap to Better Design, Together</h4>
	</header>

	<div class="timeline">

		
		<Collapsible isStage={true} stageIndex="Stage 01" stageName="Setup">
			<div class="intro">
				<p class="body_text -subtle -large">At this stage, we’re setting up the essentials that every impactful design studio needs. We’re establishing our processes, refining our services, and building the resources to deliver a seamless client experience.</p>
				<p class="body_text -subtle -large">Our goal here is to create a foundation that supports our vision and enables us to produce designs that are clear, accessible, and purposeful.</p>
			</div>
			<ul>
				{#each tasks.filter(task => task.stage === '01') as task, i}
				<li>
					<StageTask
						customClass={task.customClass}
						index={i + 1}.
						extraBadgeLabel={task.extraBadgeLabel}
						badgeClass={task.badgeClass}
						badgeLabel={task.badgeLabel}
						title={task.title}
						description={task.description}
					/>
				</li>
				{/each}
			</ul>
		</Collapsible>

		<Collapsible isStage={true} stageIndex="Stage 02" stageName="Services">
			<div class="intro">
				<p class="body_text -subtle -large">In Stage Two, we’re focusing on enhancing our service portfolio to address the unique challenges faced by tech startups and forward-thinking companies.</p>
				<p class="body_text -subtle -large"> From developing our consultation services to building robust design systems, this phase is all about creating solutions that simplify complex ideas and empower brands to grow confidently.</p>
			</div>
			<ul>
				{#each tasks.filter(task => task.stage === '02') as task, i}
				<li>
					<StageTask
						customClass={task.customClass}
						index={i + 1}.
						extraBadgeLabel={task.extraBadgeLabel}
						badgeClass={task.badgeClass}
						badgeLabel={task.badgeLabel}
						title={task.title}
						description={task.description}
					/>
				</li>
				{/each}
			</ul>
		</Collapsible>

		<Collapsible isStage={true} stageIndex="Stage 03" stageName="Growth">
			<div class="intro">
				<p class="body_text -subtle -large">This stage is about fostering connections and opening the door to more meaningful interactions. We’re committed to building relationships with clients, collaborators, and supporters who share our values.</p>
				<p class="body_text -subtle -large">Here, we’re implementing strategies to engage, share insights, and provide value through content and conversations that resonate with our community.</p>
			</div>
			<ul>
				{#each tasks.filter(task => task.stage === '03') as task, i}
				<li>
					<StageTask
						customClass={task.customClass}
						index={i + 1}.
						extraBadgeLabel={task.extraBadgeLabel}
						badgeClass={task.badgeClass}
						badgeLabel={task.badgeLabel}
						title={task.title}
						description={task.description}
					/>
				</li>
				{/each}
			</ul>
		</Collapsible>

		<Collapsible isStage={true} stageIndex="Stage 04" stageName="Scaling">
			<div class="intro">
				<p class="body_text -subtle -large">In the final stage, we’re looking to the future. Our focus here is on scaling our operations and pushing the boundaries of what we can achieve. We’re exploring new ways to innovate within our niche and build lasting partnerships that make a real difference in health, sustainability, and science.</p>
				<p class="body_text -subtle -large">This phase is about growing sustainably while staying true to our mission of simplifying design for impactful brands.</p>
			</div>
			<ul>
				{#each tasks.filter(task => task.stage === '04') as task, i}
				<li>
					<StageTask
						customClass={task.customClass}
						index={i + 1}.
						extraBadgeLabel={task.extraBadgeLabel}
						badgeClass={task.badgeClass}
						badgeLabel={task.badgeLabel}
						title={task.title}
						description={task.description}
					/>
				</li>
				{/each}
			</ul>
		</Collapsible>

	</div>

</section>

<style>
	section.roadmap { align-items: center; }
	section.roadmap header { text-align: center; }

	section.roadmap .timeline {
		width: 100%;
		padding-top: var(--space-500);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-500);
	}
	section.roadmap .timeline .intro {
		display: flex;
		flex-direction: column;
		gap: var(--space-200);
		padding: var(--space-400) 0 var(--space-800);
	}
	section.roadmap .timeline ul li { margin-bottom: var(--space-800); }
	section.roadmap .timeline ul li::before { display: none !important; }

	:global(.collapsible .items) {
		position: relative;
	}
	:global(.collapsible .items::before) {
		position: absolute;
		top: -5px;
		left: -5px;
		content: '';
		display: none;
		width: var(--space-100);
		height: var(--space-100);
		background-color: var(--color-neutral-300);
		border-radius: var(--border-radius-xlg);
	}

	@media (min-width: 992px) {
		:global(.collapsible .items) {
			padding-left: var(--space-400);
			border-left: 1px dashed var(--color-neutral-300);
		}
		:global(.collapsible .items::before) { display: block; }
	}
</style>
