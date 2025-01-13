export function initializeGoogleAnalytics(measurementId) {
	if (typeof window === 'undefined') return; // Ensure it's client-side

	// Avoid duplicate script injection
	if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
		const script = document.createElement('script');
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		document.head.appendChild(script);

		// Initialize dataLayer and gtag
		window.dataLayer = window.dataLayer || [];
		function gtag(...args) {
			window.dataLayer.push(args);
		}
		window.gtag = gtag;
		gtag('js', new Date());
		gtag('config', measurementId);
	}
}

export function trackPageView(pagePath) {
	if (typeof window !== 'undefined' && window.gtag) {
		window.gtag('config', 'G-FMXFEETWCF', {
			page_path: pagePath,
		});
	}
}