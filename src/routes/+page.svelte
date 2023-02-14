<script> 

	import {Swiper, SwiperSlide } from 'swiper/svelte'; 
	import 'swiper/css'
	import 'swiper/css/pagination'
	import 'swiper/css/navigation'

	import { Keyboard, Pagination, Navigation } from "swiper";

	import { projects } from './projects/data.js';

</script>

<div class="main">
	<!--
	<div class="page-selector">
		<div class="button-wrapper">
			<div>
				<button></button>
			</div>
			<div>
				<button></button>
			</div>
			<div>
				<button on:click={SlideChange}></button>
			</div>
		</div>
	</div>
	-->
	<Swiper
		slidesPerView={1}
		spaceBetween={30}
		loop={true}
		keyboard={{
			enabled: true,
		}}
		pagination={{
			clickable: true, 
		}}
		navigation={true}
		modules={[Keyboard,Pagination,Navigation]}
		allowTouchMove={false}
		class="mySwiper"
	>
		{#each projects as project}
			<SwiperSlide>
				<div class="main-wrapper">
					<div class="image-wrapper">
						<div class="descriptions">
							<p class="larger-sub">{project.description}</p>
							<p class="smaller-sub">{project.who}</p>
							<p class="smaller-sub">{project.when}</p>
						</div>
						<img class="image2" src={project.image2} alt="2"/>
						<img class="image1" src={project.image1} alt="1"/>
						<div class="learnmorewrapper">
							<a class="learnmore" style="background-color:{project.highlightColor};" href="projects/{project.slug}">
								Learn More!
							</a>
						</div>
					</div>
					<h1 class="title" style="color:{project.highlightColor};">{project.title}</h1>

				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>


<style>

	:global(body) { /* this will apply to <body> */ margin: 0; padding: 0; overflow-x: hidden; }
	:root { --swiper-theme-color: #000 }

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

	.main {
		margin: 0;
		display: flex;
		background-color: #FAF9F6;
		width: 100%;
		height: calc(100vh - 89px); 
	}

	.main-wrapper {
		height: calc(100vh - 89px);
		width: 100vw;
	}

	.title {
		position: absolute;
		left: 25px;
		top: 0px;
		margin: 0px;
		font-family: Chillax-Bold;
		font-size: 8rem;
		-webkit-text-stroke-width: 4px;
		-webkit-text-stroke-color: black;
		text-shadow: 4px 4px 0px #000000;
	}

	.learnmorewrapper {
		display: grid;
		grid-template-columns: auto;
		align-items: center;
		justify-content: center;
	}

	.learnmore {
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(20px, -20px);
		-webkit-transform: translate(20px, -20px);
		-ms-transform: translate(20px, -20px);
		font-family: Chillax-Medium;
		font-size: 1.5em;
		display: flex;
		padding: 5px 20px;
		cursor: pointer;
		border: 4px solid #000000;
		text-decoration: none;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: black;
		-webkit-transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
		transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
		transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
		transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
		width: 170px;
		height: 50px;
	}

	.learnmore:hover {
		box-shadow: 4px 4px 0 0 #000;
		-webkit-transform: translate(16px, -24px);
  	-ms-transform: translate(16px, -24px);
  	transform: translate(16px, -24px);
	}

	.descriptions {
		font-family: Chillax-Variable;
		font-size: 2em;
		font-weight: 500;
		grid-area: Text;
	}

	.descriptions p {
		margin: 5px;
	}

	.larger-sub {
		text-align: right;
		font-size: 36px;
	}

	.smaller-sub {
		text-align: right;
	}

	.image-wrapper {
		position: relative;
		top: 150px;
		margin: 0 40px;
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		grid-template-areas: 
    "Text Image-1"
    "Image-2 Image-1";
	}

	.image1 {
		transform: translate(0px, -50px);
		min-width: 250px;
		width: calc(100vw - 750px);
		height: calc(100vh - 300px);
		object-fit: cover;
		border-radius: 15px;
		border: 4px solid black;
		grid-area: Image-1; 
	}

	.image2 {
		transform: translate(40px, -10px);
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
		border: 4px solid black;
		grid-area: Image-2;
	}

</style>
