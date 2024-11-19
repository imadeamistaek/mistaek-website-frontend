<script>
	import { sendEmail } from '$lib/utils/sendEmail.js';
	
	// Define the email parameters
	const email = 'hello@mistaek.com';
	const subject = "Excited to share an idea for Mistaek's Roadmap!";
	const body = `
Hi there,

I’m [Your Name], and I’m reaching out because I’d love to share with you an exciting idea! Here’s a bit more about that:

Idea Overview:

[Tell me about your idea and what we should be aiming for]

--
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

<button class="action contact-button -outline" aria-label="Send your suggestions" on:click={handleEmailClick}>
	<span>Send your suggestions</span>
	<i class="icon" aria-hidden="true">
		<img src="/icons/mi-arrow-out.webp" alt="arrow-out">
	</i>
</button>