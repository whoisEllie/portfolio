<script>
	import Projectcard from '../lib/components/projectcard.svelte';
</script>

<div class="split">
	<div class="fixed-wrapper">
		<div class="fixed">
			<div class="namecard">
				<img
					src="pfp.jpg"
					alt="Ellie facing away from the camera, wearing a grey backpack. She is looking at a skyline in the distance, lit in the warmorange glow of late evening"
					class="pfp"
				/>
				<div>
					<div style="font-size: 1.75rem;">Ellie Kelemen</div>
					<div style="font-size: 1rem;">Software Engineer, Technical Director, Maker</div>
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
			worked as a frontend developer at Hatless Studios, and interned at Madfinger Games. <br /><br
			/> In my spare time, you can probably find me on a mountain somewhere, hiking!
		</div>
	</div>
</div>

<style>
	.split {
		display: grid;
		grid-template-columns: repeat(2, 500px);
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
		display: grid;
		margin-inline: auto;
		grid-template-rows: repeat(2, 50%);
		column-gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	.pfp {
		display: flex;
		width: 15rem;
		aspect-ratio: 1/1;
		border-radius: 100%;
		object-fit: cover;
	}
</style>

