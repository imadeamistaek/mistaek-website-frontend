<script>
	// SvelteKit provides `data` as a reactive variable from the `load` function
	export let data;
</script>

{#if data && data.post}
	<h1>{data.post.title}</h1>
	<p>{data.post.meta.description}</p>
	{#if data.post.meta.image}
		<img src={`http://localhost:3000${data.post.meta.image.url}`} alt={data.post.meta.image.alt} />
	{/if}
	<p>Created At: {new Date(data.post.createdAt).toLocaleDateString()}</p>
{:else if data && data.error}
	<p>Error: {data.error.message || 'Something went wrong.'}</p>
{:else}
	<p>Loading...</p>
{/if}