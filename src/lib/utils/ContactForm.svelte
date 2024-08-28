<script>
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	
	let form = {
		name: '',
		email: '',
		companyName: '',
		project: '',
		services: [],
		budget: '',
		completionTime: '',
		referral: '',
		agreement: false,
	};
	
	let errors = {};
	
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};
	
	const validateForm = () => {
		errors = {};
		if (!form.name.trim()) {
			errors.name = "Name is required.";
		}
		if (!validateEmail(form.email)) {
			errors.email = "Valid email address is required.";
		}
		if (!form.project.trim()) {
			errors.project = "Please describe the project.";
		}
		if (form.services.length === 0) {
			errors.services = "Please select at least one service.";
		}
		if (!form.agreement) {
			errors.agreement = "You must agree to the terms.";
		}
		return Object.keys(errors).length === 0;
	};
	
	const handleCheckboxChange = (service) => {
		if (form.services.includes(service)) {
			form.services = form.services.filter(s => s !== service);
		} else {
			form.services = [...form.services, service];
		}
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			try {
				// For the purpose of the demo, let's just log the form data
				console.log(form);
				
				// In a real application, you'd submit this form data to a server:
				// const response = await fetch('/api/submit', {
				//   method: 'POST',
				//   headers: { 'Content-Type': 'application/json' },
				//   body: JSON.stringify(form),
				// });
				
				// Clear form after submission
				form = {
					name: '',
					email: '',
					companyName: '',
					project: '',
					services: [],
					budget: '',
					completionTime: '',
					referral: '',
					agreement: false,
				};
				
				// Clear errors
				errors = {};
				
			} catch (err) {
				console.error("Form submission error:", err);
			}
		}
	};
</script>

<form on:submit={handleSubmit}>
	<div>
		<span class="tag -mini"><p class="body_text -micro">01</p></span>
		<label for="name">What’s your name?</label>
		<input id="name" type="text" bind:value={form.name} />
		{#if errors.name}<p class="error">{errors.name}</p>{/if}
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">02</p></span>
		<label for="email">What’s your email address?</label>
		<input id="email" type="email" bind:value={form.email} />
		{#if errors.email}<p class="error">{errors.email}</p>{/if}
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">03</p></span>
		<label for="companyName">What’s your company/organisation name? (optional)</label>
		<input id="companyName" type="text" bind:value={form.companyName} />
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">04</p></span>
		<label for="project">What is your project and what are you looking to achieve?</label>
		<textarea id="project" bind:value={form.project}></textarea>
		{#if errors.project}<p class="error">{errors.project}</p>{/if}
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">05</p></span>
		<p class="body_text -small">What services are you looking for?</p>
		<div>
			<label>
				<input type="checkbox" value="design" on:change={() => handleCheckboxChange('design')} bind:group={form.services} />
				Design Systems & Design Operations
			</label>
			<label>
				<input type="checkbox" value="development" on:change={() => handleCheckboxChange('development')} bind:group={form.services} />
				UX/UI & Product Design
			</label>
			<label>
				<input type="checkbox" value="consulting" on:change={() => handleCheckboxChange('consulting')} bind:group={form.services} />
				Branding & Identity
			</label>
			<label>
				<input type="checkbox" value="design" on:change={() => handleCheckboxChange('design')} bind:group={form.services} />
				Web Design
			</label>
			<label>
				<input type="checkbox" value="development" on:change={() => handleCheckboxChange('development')} bind:group={form.services} />
				Consulting & Strategy
			</label>
			<label>
				<input type="checkbox" value="consulting" on:change={() => handleCheckboxChange('consulting')} bind:group={form.services} />
				Investor & Pitch Decks
			</label>
			<label>
				<input type="checkbox" value="consulting" on:change={() => handleCheckboxChange('consulting')} bind:group={form.services} />
				Sustainability & Ethical Design
			</label>
		</div>
		{#if errors.services}<p class="error">{errors.services}</p>{/if}
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">06</p></span>
		<label for="budget">What is your budget for this project? (optional)</label>
		<select id="budget" bind:value={form.budget}>
			<option value="" disabled>Select a budget range</option>
			<option value="under-5k">Under $5,000</option>
			<option value="5k-10k">$5,000 - $10,000</option>
			<option value="10k-20k">$10,000 - $20,000</option>
			<option value="20k-plus">Over $20,000</option>
		</select>
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">07</p></span>
		<label for="completionTime">When do you need to complete the project? (optional)</label>
		<input id="completionTime" type="text" bind:value={form.completionTime} />
	</div>
	
	<div>
		<span class="tag -mini"><p class="body_text -micro">08</p></span>
		<label for="referral">How did you hear about me? (optional)</label>
		<input id="referral" type="text" bind:value={form.referral} />
	</div>
	
	<div>
		<label>
			<input type="checkbox" bind:checked={form.agreement} />
			I agree to the terms and privacy policy
		</label>
		{#if errors.agreement}<p class="error">{errors.agreement}</p>{/if}
	</div>
	
	<button type="submit">Submit</button>
</form>

<style>
	.error {
		color: red;
		font-size: 0.9em;
	}
</style>

<!-- WHEN WE ARE READY TO USE THE FORM -->
<!-- just place this in the body > <ContactForm /> -->
