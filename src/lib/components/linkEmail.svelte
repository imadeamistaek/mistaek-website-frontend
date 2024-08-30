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

<!-- svelte-ignore a11y-invalid-attribute -->
<a class="primary" href="#" on:click|preventDefault={handleEmailClick} role="button" rel="noopener noreferrer" aria-label="Let's Build Together">
	<p class="body_text -micro -primary">Let's Build Together</p>
</a>

<style lang="scss">
	a {
		position: relative;
		display: flex;
		align-items: center;
		text-decoration: none;
		font-size: 24px;
		color: $color-brand-accent;
		white-space: nowrap;
		
		&::before {
			content: '';
			display: inline-block;
			width: 8px;
			height: 8px;
			-moz-border-radius: 8px;
			-webkit-border-radius: 8px;
			border-radius: 8px;
			background-color: $color-brand-accent;
			margin-right: 8px;
			transition: transform $transition-duration-fast;
			transition-timing-function: $transition-timing-function;
		}

		&::after {
			content: '';
			position:absolute;
			width: 100%;
			height: 1px;
			background-color: $color-brand-accent;
			top: 100%;
			left: 0;
			pointer-events: none;
			transform-origin: 100% 50%;
			transform: scale3d(0, 1, 1);
			transition: transform $transition-duration-fast;
			transition-timing-function: $transition-timing-function;
		}

		&:hover {
			&::before {
				transform: scale3d(0.8, 0.8, 0.8);
			}
			&::after {
				transform-origin: 0% 50%;
				transform: scale3d(1, 1, 1);
			}
		}
	}
</style>