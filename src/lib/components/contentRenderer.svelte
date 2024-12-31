<script>
	export let content;
	// Access the base API URL from environment variables
	const apiBaseUrl = import.meta.env.VITE_API_URL;
	
	function renderNode(node, index = 0, contentArray = []) {
		if (!node) return '';

		switch (node.type) {
			case 'heading': {
				let buffer = [];
				let i = index;

				if (index === 0 || contentArray[index - 1]?.type !== 'heading') {
					while (i < contentArray.length && contentArray[i]?.type === 'heading') {
						const headingContent = contentArray[i].children
							? contentArray[i].children.map((child, j) => renderNode(child, j, contentArray[i].children)).join('')
							: '';
						buffer.push(`<h4>${headingContent}</h4>`);
						i++;
					}
					return `<div class="heading_group -vertical">${buffer.join('')}</div>`;
				}

				return '';
			}

			case 'paragraph': {
				let buffer = [];
				let i = index;

				if (index === 0 || contentArray[index - 1]?.type !== 'paragraph') {
					while (i < contentArray.length && contentArray[i]?.type === 'paragraph') {
						const paragraphContent = contentArray[i].children
							? contentArray[i].children.map((child, j) => renderNode(child, j, contentArray[i].children)).join('')
							: '';
						buffer.push(`<p class="body_text -large">${paragraphContent}</p>`);
						i++;
					}
					return `<div class="paragraph_group -vertical">${buffer.join('')}</div>`;
				}

				return '';
			}

			case 'list': {
				const tag = node.tag === 'ol' ? 'ol' : 'ul';
				return `<${tag} class="article_list">${node.children?.map((child, i) => renderNode(child, i, node.children)).join('')}</${tag}>`;
			}

			case 'listitem':
				return `<li><p class="body_text -large">${node.children?.map((child, i) => renderNode(child, i, node.children)).join('')}</p></li>`;

			case 'text':
				return node.text || '';

			case 'horizontalrule':
				return `<span class="horizontal_divider"></span>`;

			case 'link': {
				const isInternal = node.fields?.linkType === 'internal';
				const target = node.fields?.newTab ? '_blank' : '_self';
				const rel = target === '_blank' ? 'noopener noreferrer' : '';

				// For internal links, construct the URL using the `slug` from `node.fields.doc`
				const href = isInternal
					? `/blog/${node.fields?.doc?.value?.slug || ''}` // Use the slug for the blog post
					: node.fields?.url || '#'; // Fallback to `#` if URL is missing

				// Prevent full-page reload for internal links (SvelteKit SPA navigation)
				if (isInternal) {
					return `<a href="${href}" class="link -in-context" sveltekit:prefetch>
						${node.children?.map((child, i) => renderNode(child, i, node.children)).join('')}
					</a>`;
				}

				// Render the anchor tag for external links
				return `<a href="${href}" target="${target}" rel="${rel}" class="link -in-context">
					${node.children?.map((child, i) => renderNode(child, i, node.children)).join('')}
				</a>`;
			}

	
			case 'linebreak':
				return `<br />`;

			case 'block': {
				if (node.fields?.blockType === 'mediaBlock') {
					return renderMediaBlock(node.fields);
				}
				return `<div>${JSON.stringify(node.fields)}</div>`;
			}

			default:
				console.warn('Unknown node type:', node.type);
				return `<span>Unknown type: ${node.type}</span>`;
		}
	}
	
	function renderMediaBlock(fields) {
		const { media } = fields;
		if (!media) return '<div>No media found</div>';
		
		// Construct the full image URL
		const imageUrl = media.url ? `${apiBaseUrl}${media.url}` : '';
		const altText = media.alt || 'Image';
		const caption = media.caption?.root.children[0].children[0].text || '';
		
		return `
		<figure>
		  <img src="${imageUrl}" alt="${altText}" />
		  ${caption ? `<figcaption>${caption}</figcaption>` : ''}
		</figure>
	  `;
	}
</script>

{#if content && content.root && content.root.children}
	{#each content.root.children as child, index}
		{@html renderNode(child, index, content.root.children)}
	{/each}
{:else}
	<p>No content available</p>
{/if}