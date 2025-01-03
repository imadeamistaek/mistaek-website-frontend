export function initializeGoogleAnalytics(measurementId) {
	if (typeof window === 'undefined') return; // Ensure it's running in the browser
	
	// Add the Google Analytics script tag dynamically
	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
	document.head.appendChild(script);
	
	// Initialize gtag
	window.dataLayer = window.dataLayer || [];
	function gtag(...args) {
		window.dataLayer.push(args);
	}
	window.gtag = gtag;
	gtag('js', new Date());
	gtag('config', measurementId);
}
