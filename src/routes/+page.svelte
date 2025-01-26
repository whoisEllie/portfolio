<script>
	import ProjectCard from '../lib/components/projectcard.svelte';
	import ExperienceCard from '$lib/components/experiencecard.svelte';

	// images
	import WarboundThumbnail from '$lib/images/Warbound/Warbound.gif';
	import FPSCoreThumbnail from '$lib/images/FPSCore/FPSCore_Thumb.png';
	import ProjectIsolationThumbnail from '$lib/images/ProjectIsolation.png';
	import GiantsBridgeThumbnail from '$lib/images/GiantsBridge.jpg';
	import FallBlauThumbnail from '$lib/images/FallBlau.jpg';
	import RainstoneThumbnail from '$lib/images/Rainstone.png';
	import ProfilePicture from '$lib/images/pfp.jpg';

	// icons
	import Github from '$lib/icons/brand-github.svelte';
	import Youtube from '$lib/icons/brand-youtube.svelte';
	import Bluesky from '$lib/icons/brand-bluesky.svelte';
	import Linkedin from '$lib/icons/brand-linkedin.svelte';
	import Share from '$lib/icons/share.svelte';
	import Mail from '$lib/icons/mail-up.svelte';
</script>

<div class="split">
	<div class="fixed-wrapper">
		<div class="fixed">
			<div class="namecard">
				<img
					src={ProfilePicture}
					alt="Ellie facing away from the camera, wearing a grey backpack. She is looking at a skyline in the distance, lit in the warm, orange glow of late evening"
					class="pfp"
					draggable="false"
				/>
				<div style="font-size: 1.75rem;">Ellie Kelemen</div>
				<div style="font-size: 1rem;">Software Engineer, Technical Director, Maker</div>
				<div class="socials">
					<a href="https://bsky.app/profile/elliekelemen.com">
						<Bluesky />
					</a>
					<a href="https://youtube.com/@elliemakesgames"><Youtube /></a>
					<a href="https://github.com/whoisEllie">
						<Github />
					</a>
					<a href="https://www.linkedin.com/in/ellie-kelemen/">
						<Linkedin />
					</a>
					<a href="mailto:elliekelemen@protonmail.com">
						<Mail />
					</a>
					<button
						class="share-button"
						on:click={() => {
							if (navigator.share) {
								navigator
									.share({
										title: "Ellie's Portfolio",
										text: "Share a quick link to ellie's portfolio and socials",
										url: 'https://links.elliekelemen.com'
									})
									.then(() => console.log('Shared successfully'))
									.catch(() => {
										console.log('Encountered an error while sharing');
									});
							} else {
								window.open('https://links.elliekelemen.com');
							}
						}}
					>
						<Share />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="scrolling">
		<div>
			I'm a game & software developer with a deep love for technical design. <br /><br /> Currently,
			I'm in the final year of my Masters degree in Computer Science at the University of Exeter.
			Alongside my studies, I work part-time as a VR & AI developer at
			<a href="#orbital">Orbital Media</a>, where I build VR applications for healthcare, and
			engineer generative AI video solutions for use in interactive educational content. I also
			build & maintain an open-source plugin called
			<a href="#fpscore">FPS Core</a>, which and work on a multiplayer game called
			<a href="#warbound">Warbound</a>.
			<br /><br />
			Previously, I've worked as a frontend developer at <a href="#hatless">Hatless Studios</a>,
			where I built advanced frontends with the React framework. I've also and interned at
			<a href="#madfinger">MADFINGER Games</a>
			, where I worked as a QA tester on Shadowgun Legends.
			<br /><br /> In my spare time, you can probably find me on a mountain somewhere, hiking!
		</div>
		<h2>Work Experience</h2>
		<div class="experience">
			<ExperienceCard
				Title="Orbital Global Group"
				date="2024 - 2025"
				Role="Software Developer in VR & AI"
				url="https://orbitalglobalgroup.com/"
				id="orbital"
				Description="Built VR applications in partnership with the NHS, using the Unity game engine. Worked with GenAI tools, including Runway, to generate interactive videos for training & recruitment purposes. Developed custom generative AI pipelines using ComfyUI and custom LoRA training to ensure consistent characters across a variety of scenes."
			/>
			<ExperienceCard
				Title="Hatless Studios"
				date="2023 - 2024"
				Role="Frontend Software Engineer & Infrastructure Developer"
				url="https://www.linkedin.com/company/hatless-studios/"
				id="hatless"
				Description="Worked with clients to develop 10+ websites for various businessess across Exeter and the Southwest. Wrote and maintained large codebased in React, predominantly using TypeScript. Maintained and expanded Nix-based infrastructure, including CI/CD and web hosting."
			/>
			<ExperienceCard
				Title="Summer Game Dev"
				date="Summer 2021"
				Role="Game Designer"
				url="https://summer-game-dev.itch.io/giants-bridge"
				id="sgd"
				Description="Led the design of our game 'Giant's Bridge' during the 2021 instance of Summer Game Dev, writing technical documentation, running playtests, and co-ordinating the rest of the development team."
			/>
			<ExperienceCard
				Title="MADFINGER Games"
				date="Summer 2018"
				Role="QA Intern"
				url="https://www.madfingergames.com/"
				id="madfinger"
				Description="Assisted in the QA process for Shadowgun Legends, investigating player reports and detailing findings in internal documentation."
			/>
		</div>
		<button
			class="resume"
			on:click={() => {
				window.open('resume.pdf');
			}}>find more employment details on my <u>resume</u></button
		>
		<h2>Projects</h2>
		<div class="projects">
			<ProjectCard
				Image={WarboundThumbnail}
				Alt="Image"
				Title="Warbound"
				Description="A multiplayer FPS/RTS, currently in development in Unreal Engine 5"
				slug="warbound"
			/>
			<ProjectCard
				Image={FPSCoreThumbnail}
				Alt="Image"
				Title="FPS Core"
				Description="A first-person shooter framework for Unreal Engine, facilitating easy setup and deep customization of FPS projects"
				slug="fpscore"
			/>
			<ProjectCard
				Image={ProjectIsolationThumbnail}
				Alt="Image"
				Title="Project Isolation"
				Description="A singleplayer open-world FPS, built on Unreal Engine 4.27 whose development led to the creation of FPS Core "
				slug="isolation"
			/>
			<!--
			<ProjectCard
				Image={GiantsBridgeThumbnail}
				Alt="Image"
				Title="Giant's Bridge"
				Description="A third-person couch co-op game built as part of Summer Game Dev 2021."
				slug="giantsbridge"
			/>
			-->
			<ProjectCard
				Image={FallBlauThumbnail}
				Alt="Image"
				Title="Fall Blau"
				Description="An authentic WW2 FPS, built in Unreal Engine and my first exploration and use of C++ programming"
				slug="fallblau"
			/>
			<!--
			<ProjectCard
				Image={RainstoneThumbnail}
				Alt="Image"
				Title="Rainstone"
				Description="An early game jam project and my first experience working with a team."
				slug="rainstone"
			/>
			-->
		</div>

		<a href="https://github.com/whoisEllie/portfolio" class="acknowledgment">
			{'Built with ❤️  & SvelteKit'}
		</a>
	</div>
</div>

<style>
	.split {
		display: grid;
		grid-template-columns: min(40% - 15px, 500px) min(60% - 15px, 700px);
		position: relative;
		justify-content: center;
		margin-top: 10rem;

		@media screen and (max-width: 1000px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 1rem;
		}
	}

	h2 {
		margin-top: 3rem;
	}

	a,
	a:visited,
	a:hover,
	a:active {
		color: inherit;
	}

	.fixed {
		position: fixed;
		display: flex;

		@media screen and (max-width: 1000px) {
			position: relative;
		}
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

		@media screen and (max-width: 1200px) {
			margin: 3rem 0;
		}
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

	.share-button {
		border: none;
		padding: 0;
		margin: 0;
		height: 24px;
		cursor: pointer;
		background: none;
		color: black;
		@media (prefers-color-scheme: dark) {
			color: white;
		}
	}

	.experience {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.resume {
		border: none;
		cursor: pointer;
		width: max-content;
		background: none;
		color: #303030;
		margin: 2rem 0;

		@media (prefers-color-scheme: dark) {
			color: #808080;
		}
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

		@media (prefers-color-scheme: dark) {
			background: linear-gradient(145deg, #101010, #141414);
			box-shadow:
				9px 9px 17px #070707,
				-9px -9px 17px #1d1d1d;
		}
	}
</style>
