<script>
	import { sendEmail } from '$lib/utils/sendEmail.js';
	
	// Define the email parameters
	const email = 'imadeamistaek@gmail.com';
	const subject = 'Project Inquiry';
	const body = 'Hello, I´m interested in discussing a project with you. Thanks!';
	
	function handleEmailClick(event) {
		event.preventDefault(); // Prevent the default link behavior
		sendEmail(email, subject, body); // Trigger the email function
	}
</script>

<button class="action contact-button -primary" on:click={handleEmailClick}>
	<h6>Let's Build Together</h6>
	<i class="icon">
		<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.4975 10.1177L12.4975 4.32412C12.4963 4.10317 12.4081 3.89159 12.2518 3.73536C12.0956 3.57913 11.884 3.49086 11.6631 3.48973L5.86952 3.48973L5.86952 4.48911L10.791 4.48911L3.39465 11.8854L4.10175 12.5926L11.4981 5.19622L11.4981 10.1177L12.4975 10.1177Z" fill="#F5F5F4"/>
		</svg>
	</i>
</button>