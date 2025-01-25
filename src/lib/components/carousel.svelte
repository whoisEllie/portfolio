<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	let { images } = $props();
</script>

<div class="carousel">
	<Splide
		options={{
			type: 'loop',
			width: 'min(100vw - 15px, 840px)',
			gap: '2rem',
			height: '40svh'
		}}
	>
		{#each images as image}
			<SplideSlide>
				<img class="cover" src={image} />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	.carousel {
		margin: 2rem 0;
	}

	img {
		height: 30svh;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
</style>
