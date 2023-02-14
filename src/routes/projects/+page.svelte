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

	:global(body) { /* this will apply to <body> */ margin: 0; padding: 0; }

	@font-face {
  font-family: 'Chillax-Variable';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Variable.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Variable.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Variable.ttf') format('truetype');
       font-weight: 200 700;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Chillax-Extralight';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Extralight.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Extralight.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Extralight.ttf') format('truetype');
       font-weight: 200;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Chillax-Light';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Light.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Light.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Light.ttf') format('truetype');
       font-weight: 300;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Chillax-Regular';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Regular.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Regular.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Regular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Chillax-Medium';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Medium.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Medium.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Medium.ttf') format('truetype');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Chillax-Semibold';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Semibold.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Semibold.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Semibold.ttf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: normal;
}


@font-face {
  font-family: 'Chillax-Bold';
  src: url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Bold.woff2') format('woff2'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Bold.woff') format('woff'),
       url('/fonts/Chillax_Complete/Fonts/WEB/fonts/Chillax-Bold.ttf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
}

	.projects-carousel {
		margin: 0px;
		padding-inline-start: unset;
		width: 100vw;
		height: calc(100vh - 89px);
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
		pointer-events: none;
		top: 25%;
		left: 0;
		display: grid;
		text-align: center;
		width: 100%;
		grid-template-rows: repeat(2, auto);
		color: white;
		font-family: Chillax-SemiBold;
		font-size: 24px;
	}


</style>
