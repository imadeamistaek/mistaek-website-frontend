
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t<title>Mistaek Design Studio</title>\n\t<meta name=\"description\" content=\"Helping innovative startups in health, sustainability, and science build impactful, user-friendly brands with clear, accessible, and organized design.\">\n\t<meta name=\"keywords\" content=\"Design systems, UX/UI design, Branding for startups, Web design for tech companies, Accessible design solutions, Health tech branding, Sustainable brand design, Science-focused design, User-friendly interfaces, Innovative design strategies\">\n\t<meta name=\"author\" content=\"Mistaek Design Studio\">\n\t<meta name=\"robots\" content=\"index, follow\">\n\t<meta name=\"application-name\" content=\"&nbsp;\"/>\n\t<meta name=\"msapplication-TileColor\" content=\"#FFFFFF\" />\n\t<meta name=\"msapplication-TileImage\" content=\"mstile-144x144.png\" />\n\t<meta name=\"msapplication-square70x70logo\" content=\"mstile-70x70.png\" />\n\t<meta name=\"msapplication-square150x150logo\" content=\"mstile-150x150.png\" />\n\t<meta name=\"msapplication-wide310x150logo\" content=\"mstile-310x150.png\" />\n\t<meta name=\"msapplication-square310x310logo\" content=\"mstile-310x310.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"57x57\" href=\"" + assets + "/favicon/apple-touch-icon-57x57.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"" + assets + "/favicon/apple-touch-icon-114x114.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"" + assets + "/favicon/apple-touch-icon-72x72.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"" + assets + "/favicon/apple-touch-icon-144x144.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"60x60\" href=\"" + assets + "/favicon/apple-touch-icon-60x60.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"120x120\" href=\"" + assets + "/favicon/apple-touch-icon-120x120.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"76x76\" href=\"" + assets + "/favicon/apple-touch-icon-76x76.png\" />\n\t<link rel=\"apple-touch-icon-precomposed\" sizes=\"152x152\" href=\"" + assets + "/favicon/apple-touch-icon-152x152.png\" />\n\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon/favicon-196x196.png\" sizes=\"196x196\" />\n\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon/favicon-96x96.png\" sizes=\"96x96\" />\n\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon/favicon-32x32.png\" sizes=\"32x32\" />\n\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon/favicon-16x16.png\" sizes=\"16x16\" />\n\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/favicon/favicon-128.png\" sizes=\"128x128\" />\n\t<link rel=\"canonical\" href=\"https://www.mistaek.com/\">\n\t<!-- Open Graph Meta Tags -->\n\t<meta property=\"og:title\" content=\"Mistaek Design Studio\">\n\t<meta property=\"og:description\" content=\"Empowering forward-thinking startups in health, sustainability, and science build impactful, user-friendly brands with clear, accessible, and organized design.\">\n\t<meta property=\"og:image\" content=\"" + assets + "/og_image.png\">\n\t<meta property=\"og:url\" content=\"https://www.mistaek.com/\">\n\t<meta property=\"og:type\" content=\"website\">\n\t<meta property=\"og:site_name\" content=\"Mistaek Design Studio\">\n\t" + head + "\n</head>\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "nsv439"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	({ handle, handleFetch, handleError, init } = await import("../../../src/hooks.server.js"));

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
