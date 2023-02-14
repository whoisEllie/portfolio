<nav class="navbar">
	<div class="left-aligned">
		<a href="/"> Ellie Kelemen </a>
	</div>
	<div class="right-aligned">
		<a href="/files/EllieKelemenCV.pdf"> CV </a>
		<a href="/projects/" class="projects"> Projects </a>
		<a href="mailto:elliekelemen@protonmail.com" class="contact"> Contact me! </a>
	</div>
</nav>

<slot></slot>

<style>
	
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

	a {
		font-family: Chillax-Variable;
		font-weight: 600;
		color: black;
		text-decoration: none;
	}

	.navbar {
		width: 100vw;
		padding: none;
		background-color: #FAF9F6;
		display: flex;
		height: 87px;
		border-bottom: 2px solid #000000;
		align-items: center;
    overflow-x: hidden;
	}

	.left-aligned a {
		font-size: 36px;
		padding-left: 25px;
	}

	.right-aligned {
		margin-left: auto;
		display: grid;
		grid-template-columns: repeat(3, auto);
		align-items: center;
		justify-content: center;
	}

	.right-aligned a {
		margin: 15px;
		font-size: 24px;
	}

	.projects {
		padding: auto;
	}

	.contact {
		background-color: #9BD7D1;
		border-radius: 10px;
		padding: 5px 20px;
		cursor: pointer;
		border: 2px solid #000000;
		text-decoration: none;
		color: #000000;
		-webkit-transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  	transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
	}

	.contact:hover {
		box-shadow: 4px 4px 0 0 #000;
		-webkit-transform: translate(-4px, -4px);
  	-ms-transform: translate(-4px, -4px);
  	transform: translate(-4px, -4px);
	}

</style>
