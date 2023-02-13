<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<article class="article">
	<div class="header">
		<div class="image-wrapper">
			<img src={data.project.image1}/>
			<div class="text">
				<h1 style="color:{data.project.highlightColor};">{data.project.title}</h1>
			</div>
		</div>
	</div>
	<div class="markdown-wrapper">
		<svelte:component this={data.content}/>
	</div>
</article>

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

	.article {
		width: 100vw;
		min-height: calc(100vh - 87px);
	}

	.header {
		display: flex;
		width: 100%;
		height: 250px;
		text-align: center;
		font-family: Chillax-Bold;
	}

	.image-wrapper {
		position: relative;
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
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		color: white;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: black;
		text-shadow: 2px 2px 0px #000000;
	}


	.markdown-wrapper {
		max-width: 1080px;
		margin: 0 auto;
		padding: 0 15px;
		font-family: Chillax-Variable;
	}

</style>
