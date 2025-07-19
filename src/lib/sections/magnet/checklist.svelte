<script>
	// Wizard state
	let currentStep = 0; // 0 = intro, 1-5 = checklist steps, 6 = final
	let wizardSelections = [
	[false, false, false, false, false], // Step 1
	[false, false, false, false, false], // Step 2
	[false, false, false, false, false], // Step 3
	[false, false, false, false, false], // Step 4
	[false, false, false, false, false], // Step 5
	];
	
	const wizardSteps = [
	{
		title: "Product Maturity",
		description: "Understanding where your product stands in its development journey",
		questions: [
		"Your product has a clear value proposition and target market",
		"You have paying customers or strong user validation",
		"Your core features are stable and well-defined",
		"You're planning to scale or add new features soon",
		"Your product roadmap extends beyond the next 3 months",
		],
	},
	{
		title: "Team Structure",
		description: "Assessing your team's design and development capabilities",
		questions: [
		"You have dedicated design resources (internal or external)",
		"Your development team uses component-based frameworks",
		"Design and development teams communicate regularly",
		"Multiple people work on UI/UX (or will soon)",
		"There's leadership buy-in for design system investment",
		],
	},
	{
		title: "Current Design State",
		description: "Evaluating your existing design assets and consistency",
		questions: [
		"You have some form of style guide or brand guidelines",
		"Your UI components are somewhat consistent across the product",
		"You use design tools like Figma, Sketch, or Adobe XD regularly",
		"You have reusable design patterns or templates",
		"Users find your product's design cohesive and professional",
		],
	},
	{
		title: "Technical Foundation",
		description: "Understanding your development setup and practices",
		questions: [
		"Your codebase has reusable UI components",
		"You use a consistent CSS methodology or framework",
		"You have version control for both design and code",
		"Your team follows consistent coding standards",
		"You can deploy design changes without breaking existing features",
		],
	},
	{
		title: "Growth & Scaling Needs",
		description: "Identifying your future challenges and opportunities",
		questions: [
		"You've experienced inconsistencies in your product's look and feel",
		"Design and development handoffs take longer than you'd like",
		"You want to speed up your design and development process",
		"You're preparing for rapid user or team growth",
		"Maintaining design quality while moving fast is a priority",
		],
	},
	];
	
	function handleCheckboxChange(stepIndex, questionIndex) {
		wizardSelections[stepIndex][questionIndex] = !wizardSelections[stepIndex][questionIndex];
		wizardSelections = wizardSelections; // Trigger reactivity
	}
	
	function nextStep() {
		if (currentStep < 6) {
			currentStep++;
		}
	}
	
	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}
	
	function startChecklist() {
		currentStep = 1;
	}
	
	function resetWizard() {
		currentStep = 0;
		wizardSelections = [
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		];
	}
	
	function getProgressPercentage() {
		if (currentStep === 0) return 0;
		if (currentStep >= 6) return 100;
		return currentStep * 20;
	}
	
	function getTotalSelections() {
		return wizardSelections.flat().filter(Boolean).length;
	}
</script>

<section id="checklist" class="section checklist" aria-labelledby="checklist-heading">
	
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
			{#if currentStep === 0}
			<!-- Step 0: Intro Screen -->
			<div class="p-8 lg:p-12">
				<!-- Progress Bar - 0% -->
				<div class="mb-8">
					<div class="flex justify-between items-center mb-2">
						<span class="text-sm font-medium text-gray-600">Ready to get started?</span>
						<span class="text-sm text-gray-500">0% Complete</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-2">
						<div
						class="bg-orange-600 h-2 rounded-full transition-all duration-300"
						style="width: 0%"
						></div>
					</div>
				</div>
				
				<h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
					Is your startup ready for a Design System?
				</h2>
				
				<p class="text-lg text-gray-600 mb-8 leading-relaxed">
					This quick, no-fluff checklist helps you find out if it's the right time to build a Design System —
					and where to start if it is.
				</p>
				
				<div class="bg-gray-50 rounded-lg p-6 mb-8">
					<h3 class="font-semibold text-gray-900 mb-4">What you'll walk away with:</h3>
					<div class="space-y-3">
						<div class="flex items-start space-x-3">
							<svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-gray-700">A clear picture of your team's readiness</span>
						</div>
						<div class="flex items-start space-x-3">
							<svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-gray-700">Tailored advice for your stage — not generic tips</span>
						</div>
						<div class="flex items-start space-x-3">
							<svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-gray-700">Next steps you can take, with or without a full system</span>
						</div>
					</div>
				</div>
				
				<button
				onclick={startChecklist}
				class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg w-full sm:w-auto transition-colors"
				>
				Start the Checklist
			</button>
			
			<p class="text-sm text-gray-500 mt-4">*Built by Mistaek to help early-stage startups scale design the smart way.</p>
		</div>

		{:else if currentStep <= 5}
		<!-- Steps 1-5: Checklist Steps -->
		<div class="p-8">
			<!-- Progress Bar -->
			<div class="mb-8">
				<div class="flex justify-between items-center mb-2">
					<span class="text-sm font-medium text-gray-600">Step {currentStep} of 5</span>
					<span class="text-sm text-gray-500">{getProgressPercentage()}% Complete</span>
				</div>
				<div class="w-full bg-gray-200 rounded-full h-2">
					<div
					class="bg-orange-600 h-2 rounded-full transition-all duration-300"
					style="width: {getProgressPercentage()}%"
					></div>
				</div>
			</div>
			
			<!-- Step Content -->
			<div class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-2">
					{String(currentStep).padStart(2, "0")}. {wizardSteps[currentStep - 1].title}
				</h2>
				<p class="text-gray-600 mb-6">{wizardSteps[currentStep - 1].description}</p>
				
				<div class="space-y-4">
					{#each wizardSteps[currentStep - 1].questions as question, index}
					<div class="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
						<button
						onclick={() => handleCheckboxChange(currentStep - 1, index)}
						class="flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors {wizardSelections[currentStep - 1][index] ? 'bg-orange-600 border-orange-600' : 'border-gray-300 hover:border-orange-400'}"
						>
						{#if wizardSelections[currentStep - 1][index]}
						<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						{/if}
					</button>
					<span class="text-gray-700 leading-relaxed">{question}</span>
				</div>
				{/each}
			</div>
		</div>
		
		<!-- Navigation -->
		<div class="flex justify-between items-center">
			<button
			onclick={prevStep}
			disabled={currentStep === 1}
			class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
			>
			Previous
		</button>
		
		<div class="flex space-x-2">
			{#each [1, 2, 3, 4, 5] as step}
			<div class="w-2 h-2 rounded-full {step <= currentStep ? 'bg-orange-600' : 'bg-gray-300'}"></div>
			{/each}
		</div>
		
		<button
			onclick={nextStep}
			class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors"
		>
		{currentStep === 5 ? "Finish" : "Next"}
		</button>
	</div>
</div>

{:else}

<!-- Step 6: Final Screen -->
<div class="p-8 lg:p-12 text-center">
	<!-- Progress Bar - 100% -->
	<div class="mb-8">
		<div class="flex justify-between items-center mb-2">
			<span class="text-sm font-medium text-gray-600">Checklist Complete!</span>
			<span class="text-sm text-gray-500">100% Complete</span>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-2">
			<div class="bg-orange-600 h-2 rounded-full transition-all duration-300" style="width: 100%"></div>
		</div>
	</div>
	
	<div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
		<svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
		</svg>
	</div>
	
	<h2 class="text-3xl font-bold text-gray-900 mb-4">You've completed the checklist!</h2>
	
	<p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
		Take a moment to reflect on your responses. Your answers reveal valuable insights about your team's
		design system readiness and the next steps that make sense for your startup.
	</p>
	
	<div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
		<a
		href="https://cal.com/andre"
		target="_blank"
		rel="noopener noreferrer"
		class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors inline-block"
		>
		Book a Strategy Call
	</a>
</div>

	<button onclick={resetWizard} class="text-sm text-gray-500 hover:text-gray-700 underline" >
		Take the checklist again
	</button>
</div>

			{/if}

		</div>
	</div>
</section>

<style>
	.checklist {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-300);
		padding: var(--space-max) 0;
		background-image: url('/background-grid-testimonial.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 140%;
	}
</style>
