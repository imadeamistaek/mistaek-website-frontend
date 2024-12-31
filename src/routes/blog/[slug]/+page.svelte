<script>
    export let data;
    const { post, author } = data;
	const relatedPosts = post.relatedPosts || [];

    import ContentRenderer from '$lib/components/contentRenderer.svelte';
    import ArticleAuthor from '$lib/components/articleAuthor.svelte';
    import RelatedPosts from '$lib/sections/blog/relatedPosts.svelte';
</script>

{#if post}
<div id="hero" class="article_title">
    <h1>{post.title}</h1>
</div>

<article>
    <aside class="article_details">
        <div>
            <p>By {author ? author.name : 'Unknown Author'}</p>
            <p>in {post.categories[0]?.title}</p>
        </div>
        <div>
            <p>Posted on</p>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
    </aside>
    
    <main id="blog-content">
        <ContentRenderer content={post.content} />
        
        <!-- Display Author Information -->
        {#if author}
            <ArticleAuthor
                photo={author.photo}
                altText={`Photo of ${author.name}`}
                label={author.name}
                role={author.role}
            />
        {/if}
    </main>
</article>
{:else if data && data.error}
<p>Error: {data.error.message || 'Something went wrong.'}</p>
{:else}
<p>Loading...</p>
{/if}

<!-- Related Posts Section -->
{#if post.relatedPosts?.length > 0}
	<RelatedPosts {relatedPosts} />
{/if}


<style>
	.article_title {
		padding-top: var(--space-max);
	}
	@media (max-width: 768px) {
		.article_title { padding: var(--space-max) 0 var(--space-600); }
	}
	article {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-400);
		padding: var(--space-max) 0;
	}

	@media (max-width: 768px) {
		article { grid-template-columns: 1fr 1fr; }
	}

	article aside {
		grid-column: span 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-400);
	}
	@media (max-width: 768px) {
		article aside { grid-column: span 2; flex-direction: row; margin-bottom: var(--space-200);}
	}

	article main {
		grid-column: span 2;
		align-items: flex-start;
	}

	:global(article main .heading_group + .paragraph_group) {
		margin-top: var(--space-500);
	}

	:global(article main .paragraph_group + .article_list) {
		margin: var(--space-200) 0;
		list-style: disc;
		padding-left: var(--space-400);
		display: flex;
		flex-direction: column;
		gap: var(--space-200);
	}

	:global(article main .paragraph_group + .heading_group) {
		margin: var(--space-max) 0 var(--space-200);
	}

	:global(article main figure) {
		width: 100%;
		margin: var(--space-800) 0;
		padding: 0;
	}
	:global(article main figure img) {
		width: 100%;
		/* aspect-ratio: 3/2; */
		object-fit: contain;
	}
</style>