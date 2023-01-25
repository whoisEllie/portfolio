<script>
	export let data;
</script>

<h1>Projects</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/projects/{slug}">{title}</a></li>
	{/each}
</ul>
