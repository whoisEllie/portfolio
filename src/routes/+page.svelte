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
						<img class="image1" src={project.image1} alt="1"/>
					</div>
					<img class="image2" src={project.image2} alt="2"/>
					<h1 class="title" style="color:{project.highlightColor};">{project.title}</h1>
					<div class="learnmorewrapper">
						<a class="learnmore" style="background-color:{project.highlightColor};" href="projects/{project.slug}">
							Learn More!
						</a>
					</div>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>


<style>

	:global(body) { /* this will apply to <body> */ margin: 0; padding: 0; }
	:root { --swiper-theme-color: #000 }

	.main {
		margin: 0;
		display: flex;
		background-color: #FAF9F6;
		width: 100%;
		min-height: calc(100vh - 87px); 
	}

	.main-wrapper {
		height: calc(100vh - 87px);
		width: 100vw;
	}

	.title {
		position: absolute;
		left: 25px;
		top: 0px;
		margin: 0px;
		font-family: Chillax;
		font-weight: 650;
		font-size: 8em;
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
		left: calc(100vw - 20%);
		top: calc(100vh - 30%);
		font-family: Chillax;
		font-weight: 500;
		font-size: 24px;
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
		-webkit-transform: translate(-4px, -4px);
  	-ms-transform: translate(-4px, -4px);
  	transform: translate(-4px, -4px);
	}

	.descriptions {
		font-family: Chillax;
		font-size: 24px;
		font-weight: 500;
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
		position: absolute;
		top: 150px;
		left: 40px;
		display: grid;
		grid-template-columns: repeat(2, auto);
	}

	.image1 {
		transform: translate(0px, -50px);
		width: calc(100vw - 650px);
		height: calc(100vh - 300px);
		object-fit: cover;
		border-radius: 15px;
		border: 4px solid black;
	}

	.image2 {
		position: absolute;
		top: 350px;
		left: 200px;
		width: calc(100vw - 1050px);
		height: calc(100vh - 500px);
		object-fit: cover;
		border-radius: 15px;
		border: 4px solid black;
	}

</style>
