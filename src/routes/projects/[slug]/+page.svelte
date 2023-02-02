<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<article class="article">
	<div class="header">
		<div class="image-wrapper">
			<img src={data.project.image1}/>
		</div>
		<div class="text">
			<h1 style="color: {data.project.highlightColor};">{data.project.title}</h1>
		</div>
	</div>
	<div class="markdown-wrapper">
		<svelte:component this={data.content}/>
	</div>
</article>

<style>

	:global(body) { /* this will apply to <body> */ margin: 0; padding: 0; }

	.article {
		width: 100vw;
		min-height: calc(100vh - 87px);
	}

	.header {
		display: flex;
		width: 100%;
		height: 250px;
		text-align: center;
		font-family: Chillax;
	}

	.image-wrapper {
		position: absolute;
		width: 100%;
		height: 250px;
		overflow: hidden;
	}

	.image-wrapper img {
		width: 105%;
  	height: 105%;
  	margin: -5px;
  	filter: blur(3px);
		object-fit: cover;
	}

	.header h1 {
		font-size: 5rem;
	}

	.text {
		position: absolute;
		width: 100%;
		text-align: center;
		color: white;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: black;
		text-shadow: 2px 2px 0px #000000;
	}


	.markdown-wrapper {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 15px;
		font-family: Chillax;
	}

</style>
