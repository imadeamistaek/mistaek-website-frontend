<script>
	import { sendEmail } from '$lib/utils/sendEmail.js';
	
	// Define the email parameters
	const email = 'imadeamistaek@gmail.com';
	const subject = "Excited to discuss a new project!";
	const body = `
Hi there,

I’m [Your Name], and I’m reaching out because I’d love to work with you on an exciting project! Here’s a bit more about what I’m looking to achieve:

Company/Organization: [Your company/organization name, if applicable]
Project Overview: [Tell me about your project and what you’re aiming for]
Services Needed: [Which services are you interested in?]
Budget: [If you have a budget in mind, feel free to share it here]
Timeline: [Do you have a deadline or timeframe in mind?]
Referral: [How did you hear about us?]

Looking forward to hearing from you!

Thanks,
[Your Name]
[Your Position/Role]
[Your Contact Information]
`;
	
	function handleEmailClick(event) {
		event.preventDefault(); // Prevent the default link behavior
		sendEmail(email, subject, body); // Trigger the email function
	}
</script>

<button class="action contact-button -filled" aria-label="Let's Build Together" on:click={handleEmailClick}>
	<span>Let's Build Together</span>
	<i class="icon" aria-hidden="true">
		<img src="mi-arrow-out.webp" alt="arrow-out">
	</i>
</button>