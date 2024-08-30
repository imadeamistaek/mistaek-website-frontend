<script>
	const cases = [
		{ label: 'Santander', url: 'https://www.instagram.com/andresequeira__', tags: ['Design System'] },
		{ label: 'Botanical', url: 'https://www.instagram.com/andresequeira__', tags: ['Design System', 'Web Design', 'Branding'] },
		{ label: 'Who Cares', url: 'https://www.instagram.com/andresequeira__', tags: ['Web Design', 'UX/UI Design'] },
		{ label: 'C.Santos VP', url: 'https://www.instagram.com/andresequeira__', tags: ['Web Design', 'UX/UI Design'] },
		{ label: 'FFMS', url: 'https://www.instagram.com/andresequeira__', tags: ['Design System', 'Web Design'] },
		{ label: 'Fullflow', url: 'https://www.instagram.com/andresequeira__', tags: ['Design System', 'UX/UI Design', 'Branding'] }
	];
</script>

<div class="list -cases">
	
	<ul class="project-cases">
		{#each cases as { label, url, tags }}
		<li>
			<a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
				
				<h5 class="-subtle">{label}</h5>
				
				<div class="tag_group">
					{#each tags as tag}
						<div class="tag -border"><p class="body_text -micro">{tag}</p></div>
					{/each}
				</div>
				
				<i class="action -border-light icon">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.4975 10.1177L12.4975 4.32412C12.4963 4.10317 12.4081 3.89159 12.2518 3.73536C12.0956 3.57913 11.884 3.49086 11.6631 3.48973L5.86952 3.48973L5.86952 4.48911L10.791 4.48911L3.39465 11.8854L4.10175 12.5926L11.4981 5.19622L11.4981 10.1177L12.4975 10.1177Z" fill="#F5F5F4"/>
					</svg>
				</i>
				
			</a>
		</li>
		{/each}
	</ul>
	
</div>

<style lang="scss">
	.list.-cases {
		flex: 1;

		ul {
			padding: 0;
			margin: 0;
			list-style: none;

			li {
				display: flex;
				padding: $space-200;
				border-top: $border-width solid $color-brand-dark-lighter;
				a {
					position: relative;
					display: flex;
					flex-direction: column;
					flex: 1;
					color: $color-neutral-100;
					gap: $space-200;

					h5 {
						flex: 1;
						transition: {
							property: color;
							duration: $transition-duration-fast;
							timing-function: $transition-timing-function;
						}
					}
					.tag_group {
						display: flex;
						flex-direction: row;
						gap: $space-100;
						flex: 1;
					}
					.action {
						position: absolute;
						right: 0;
						top: 0;
						bottom: 0;
						opacity: 0;
					}

					&:hover {
						h5 {color: $color-neutral-100;}
						.action {opacity: 1;}
					}

					@media(min-width: $breakpoint-md) {
						& {
							flex-direction: row;
							gap: $space-500;
						}
					}
				}
			}
		}
	}
</style>