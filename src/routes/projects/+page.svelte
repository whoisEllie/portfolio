<script>
	export let data;
</script>


<div class="projects-carousel">
	{#each data.summaries as { slug, title, description, image1 }}
		<a href="/projects/{slug}">
			<div class="image-wrapper">
				<img src={image1}>
			</div>
			<div class="text">
				<p>{title}</p>
				<p>{description}</p>
			</div>
		</a>
	{/each}
</div>

<style>

	.projects-carousel {
		margin: 0px;
		padding-inline-start: unset;
		width: 100vw;
		height: calc(100vh - 87px);
		display: grid;
		grid-template-columns: repeat(3, calc(100vw/3));
	}

	.projects-carousel a {
		border: 4px solid black;
		border-radius: 15px;
		margin: 15px;
		position: relative;
		object-fit: cover;
		text-decoration: none;
		box-shadow: 0px 0px 0 0 #000;
		-webkit-transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
	}

	.projects-carousel a:hover {
		box-shadow: 6px 6px 0 0 #000;
		-webkit-transform: translate(-6px, -6px);
  	-ms-transform: translate(-6px, -6px);
  	transform: translate(-6px, -6px);
	}

	.image-wrapper {
		display: flex;
		background-color: #000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.image-wrapper img {
		object-fit: cover;
		border-radius: 10px;
		width: 100%;
		height: 100%;
		opacity: .5;
		transition: opacity 200ms ease-in-out;
	}

	.image-wrapper img:hover {
		opacity: .7;
		transition: opacity 200ms ease-in-out;
	}

	.text {
		position: absolute;
		top: 25%;
		left: 0;
		display: grid;
		text-align: center;
		width: 100%;
		grid-template-rows: repeat(2, auto);
		color: white;
		font-family: Chillax;
		font-weight: 550;
		font-size: 24px;
	}


</style>
