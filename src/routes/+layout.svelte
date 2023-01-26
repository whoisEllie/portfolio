<nav class="navbar">
	<div class="left-aligned">
		<a href="/"> Ellie Kelemen </a>
	</div>
	<div class="right-aligned">
		<a href="/projects/" class="projects"> Projects </a>
		<a href="mailto:elliekelemen@protonmail.com" class="contact"> Contact me! </a>
	</div>
</nav>

<slot></slot>

<style>

	@import url(/fonts/Chillax_Complete/Fonts/WEB/css/chillax.css);

	a {
		font-family: Chillax;
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
	}

	.left-aligned a {
		font-size: 36px;
		padding-left: 25px;
	}

	.right-aligned {
		margin-left: auto;
		padding-right: 10px;
		display: grid;
		grid-template-columns: repeat(2, auto);
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
