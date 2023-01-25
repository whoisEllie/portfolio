<script> 

	import {Swiper, SwiperSlide } from 'swiper/svelte'; import 'swiper/css'
	import 'swiper/css/pagination'
	import 'swiper/css/navigation'

	import { Keyboard, Pagination, Navigation } from "swiper";


	const projects = [
		{
			name: "FPS CORE",
			learnMoreLink: "/projects/welcome",
			image1: "/images/iqtn52.jpg",
			image2: "/images/Dp5Cfr.jpg",
		},
		{
			name: "GIANT'S BRIDGE",
			learnMoreLink: "/projects/welcome",
			image1: "/images/iqtn52.jpg",
			image2: "/images/Dp5Cfr.jpg",
		},
		{ name: "PROJECT ISOLATION",
			learnMoreLink: "/projects/welcome",
			image1: "/images/Dp5Cfr.jpg",
			image2: "/images/iqtn52.jpg",
		}
	]

	function SlideChange() {
		alert('slideChange')
	}


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
		{#each projects as project, p}
			<SwiperSlide>
				<div class="main-wrapper">
					<div class="descriptions">
						<p class="larger-sub">Action-Packed couch co-op</p>
						<p class="smaller-sub">Team of 5</p>
						<p class="smaller-sub">Summer 2021</p>
					</div>
					<img class="image1" src={project.image1} alt="1"/>
					<img class="image2" src={project.image2} alt="2"/>
					<h1 class="title">{project.name}</h1>
					<div class="learnmorewrapper">
						<a class="learnmore" href={project.learnMoreLink}>
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

	.page-selector {
		position: fixed;
		left: 50%;
		bottom: 20px;
		transform: translate(-50%, -50%);
		margin: 0 auto;
	 	display: grid;
		grid-template-columns: 25px auto 25px;
		grid-template-areas: ". button-area .";
		width: 164px;
		height: 54px;
		background: #ECECEC;
		border: 3px solid black;
		border-radius: 50px;
	}

	.button-wrapper {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-area: button-area;
	}

	.button-wrapper div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button-wrapper button {
		padding: 0;
		background-color: #CDCDCD;
		width: 12px;
		height: 12px;
		border: 1px solid black;
		border-radius: 12px;
		cursor: pointer;
	}

	.button-wrapper button:hover {
		background-color: #9E9E9E;
	}

	.button-wrapper button:active {
			background-color: black;
	}

	.title {
		position: absolute;
		left: 25px;
		top: 0px;
		margin: 0px;
		font-family: Chillax;
		font-weight: 600;
		font-size: 128px;
		color: #FCBB6D;
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
		background-color: #FCBB6D;
		padding: 5px 20px;
		cursor: pointer;
		border: 4px solid #000000;
		text-decoration: none;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: #000000;
		-webkit-transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
		transition: box-shadow 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
		transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
		transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
		width: 170px;
		height: 50px;
	}

	.descriptions {
		position: absolute;
		top: 150px; 
		left: 40px;
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

	.image1 {
		position: absolute;
		top: 100px;
		left: 550px;
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
