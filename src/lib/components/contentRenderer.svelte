<script>
	export let content;
	// Access the base API URL from environment variables
	const apiBaseUrl = import.meta.env.VITE_API_URL;
	
	function renderNode(node, index = 0, contentArray = []) {
		// Safeguard for invalid input
		if (!node) return '';

		switch (node.type) {
			// case 'heading':
			// return `<h4>${node.children?.map((child, i) => renderNode(child, i, node.children)).join('')}</h4>`;

			case 'heading': {
				// Group consecutive paragraphs into a single paragraph group
				let buffer = [];
				let i = index;

				// If this is the first paragraph or there's no previous one to group with, start a new group
				if (index === 0 || contentArray[index - 1]?.type !== 'heading') {
				// Start grouping consecutive paragraphs
				while (i < contentArray.length && contentArray[i]?.type === 'heading') {
					const paragraphContent = contentArray[i].children
					? contentArray[i].children.map((child, j) => renderNode(child, j, contentArray[i].children)).join('')
					: '';
					buffer.push(`<h4>${paragraphContent}</h4>`);
					i++;
				}
				// Group paragraphs and return them
				return `<div class="heading_group -vertical">${buffer.join('')}</div>`;
				}

				// If this paragraph is part of an already started group, skip rendering it here
				return '';
			}

			case 'paragraph': {
				// Group consecutive paragraphs into a single paragraph group
				let buffer = [];
				let i = index;

				// If this is the first paragraph or there's no previous one to group with, start a new group
				if (index === 0 || contentArray[index - 1]?.type !== 'paragraph') {
				// Start grouping consecutive paragraphs
				while (i < contentArray.length && contentArray[i]?.type === 'paragraph') {
					const paragraphContent = contentArray[i].children
					? contentArray[i].children.map((child, j) => renderNode(child, j, contentArray[i].children)).join('')
					: '';
					buffer.push(`<p class="body_text -large">${paragraphContent}</p>`);
					i++;
				}
				// Group paragraphs and return them
				return `<div class="paragraph_group -vertical">${buffer.join('')}</div>`;
				}

				// If this paragraph is part of an already started group, skip rendering it here
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
		const caption = media.caption?.root?.children?.[0]?.text || '';
		
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