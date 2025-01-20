<script>
	import Projectcard from '../lib/components/projectcard.svelte';
	import WarboundThumbnail from '$lib/images/Warbound.gif';
	import FPSCoreThumbnail from '$lib/images/FPSCore.png';
	import ProjectIsolationThumbnail from '$lib/images/ProjectIsolation.png';
	import GiantsBridgeThumbnail from '$lib/images/GiantsBridge.jpg';
	import FallBlauThumbnail from '$lib/images/FallBlau.jpg';
	import RainstoneThumbnail from '$lib/images/Rainstone.png';
	import ProfilePicture from '$lib/images/pfp.jpg';

	import Github from '$lib/icons/brand-github.svg';
	import Youtube from '$lib/icons/brand-youtube.svg';
	import Bluesky from '$lib/icons/brand-bluesky.svg';
	import Share from '$lib/icons/share.svg';
</script>

<div class="split">
	<div class="fixed-wrapper">
		<div class="fixed">
			<div class="namecard">
				<img
					src={ProfilePicture}
					alt="Ellie facing away from the camera, wearing a grey backpack. She is looking at a skyline in the distance, lit in the warmorange glow of late evening"
					class="pfp"
				/>
				<div style="font-size: 1.75rem;">Ellie Kelemen</div>
				<div style="font-size: 1rem;">Software Engineer, Technical Director, Maker</div>
				<div class="socials">
					<a href="https://bsky.app/profile/elliekelemen.com"
						><img src={Bluesky} alt="The Bluesky Logo" /></a
					>
					<a href="https://youtube.com/@elliemakesgames"
						><img src={Youtube} alt="The Youtube Logo" /></a
					>
					<a href="https://github.com/whoisEllie"><img src={Github} alt="The Github Logo" /> </a>
					<a href="https://links.elliekelemen.com/"><img src={Share} alt="A share icon" /> </a>
				</div>
			</div>
		</div>
	</div>
	<div class="scrolling">
		<div>
			I'm a game & software developer with a deep love for technical design. <br /><br /> Currently,
			I'm a Masters student in Computer Science at the University of Exeter. Alongside my studies, I
			work part-time as a VR & AI developer at Orbital Media, build & maintain an open-source plugin
			called FPS Core, and work on a multiplayer game called Warbound. <br /><br /> Previously, I've
			worked as a frontend developer at Hatless Studios, where I built advanced frontends with the
			React framework. I've also and interned at Madfinger Games, where I worked as a QA tester on
			Shadowgun Legends. <br /><br /> In my spare time, you can probably find me on a mountain somewhere,
			hiking!
		</div>
		<h2>Projects</h2>
		<div class="projects">
			<Projectcard
				Image={WarboundThumbnail}
				Alt="Image"
				Title="Warbound"
				Description="A multiplayer FPS/RTS, currently in development in Unreal Engine 5"
				slug="warbound"
			/>
			<Projectcard
				Image={FPSCoreThumbnail}
				Alt="Image"
				Title="FPS Core"
				Description="A first-person shooter framework for Unreal Engine, facilitating easy setup and deep customization of FPS projects"
				slug="fpscore"
			/>
			<Projectcard
				Image={ProjectIsolationThumbnail}
				Alt="Image"
				Title="Project Isolation"
				Description="A singleplayer open-world FPS, built on Unreal Engine 4.27 whose development led to the creation of FPS Core "
				slug="isolation"
			/>
			<Projectcard
				Image={GiantsBridgeThumbnail}
				Alt="Image"
				Title="Giant's Bridge"
				Description="A third-person couch co-op game built as part of Summer Game Dev 2021."
				slug="giantsbridge"
			/>
			<Projectcard
				Image={FallBlauThumbnail}
				Alt="Image"
				Title="Fall Blau"
				Description="An authentic WW2 FPS, built in Unreal Engine and my first exploration and use of C++ programming"
				slug="fallblau"
			/>
			<Projectcard
				Image={RainstoneThumbnail}
				Alt="Image"
				Title="Rainstone"
				Description="An early game jam project and my first experience working with a team."
				slug="rainstone"
			/>
		</div>

		<a href="https://github.com/whoisEllie/portfolio" class="acknowledgment">
			{'Built with ❤️  & SvelteKit'}
		</a>
	</div>
</div>

<style>
	.split {
		display: grid;
		grid-template-columns: 500px 700px;
		position: relative;
		justify-content: center;
		margin-top: 10rem;
	}

	.fixed {
		position: fixed;
		display: flex;
	}

	.scrolling {
		display: flex;
		flex-direction: column;
	}

	.namecard {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	.pfp {
		display: flex;
		height: 15rem;
		aspect-ratio: 1/1;
		border-radius: 100%;
		object-fit: cover;
	}

	.socials {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.acknowledgment {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		width: max-content;
		margin: 2rem auto;
		cursor: pointer;
		text-decoration: none;
		color: black;
		font-size: 14px;
		font-weight: 350;
		border-radius: 25px;
		background: linear-gradient(145deg, #d8d8d8, #f0f0f0);
		box-shadow:
			9px 9px 17px #cccccc,
			-9px -9px 17px #ffffff;
	}
</style>
