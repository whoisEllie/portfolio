<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>

<style>

	h1 {
		font-size: 150px;
	}

</style>
