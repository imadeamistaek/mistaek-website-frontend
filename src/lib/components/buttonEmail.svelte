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

<button class="action contact-button -primary" aria-label="Let's Build Together" on:click={handleEmailClick}>
	<span>Let's Build Together</span>
	<i class="icon" aria-hidden="true">
		<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.4975 10.1177L12.4975 4.32412C12.4963 4.10317 12.4081 3.89159 12.2518 3.73536C12.0956 3.57913 11.884 3.49086 11.6631 3.48973L5.86952 3.48973L5.86952 4.48911L10.791 4.48911L3.39465 11.8854L4.10175 12.5926L11.4981 5.19622L11.4981 10.1177L12.4975 10.1177Z" fill="#F5F5F4"/>
		</svg>
	</i>
</button>