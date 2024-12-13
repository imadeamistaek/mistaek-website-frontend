<script>
	export let label; // Label to be used in the tag
	export let customClass;
</script>

<div class={`badge ${customClass}`}>
	<p class="body_text -nano">{label}</p>
</div>