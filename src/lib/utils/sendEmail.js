// src/lib/utils/sendEmail.js
export function sendEmail(email, subject, body) {
	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	window.location.href = mailtoLink;
}
