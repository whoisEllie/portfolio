<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	let { images } = $props();
</script>

<Splide
	options={{
		type: 'loop',
		width: 840,
		autoWidth: true,
		gap: '2rem',
		padding: '15%',
		autoHeight: false,
		height: '40svh',
		heightRatio: 0.5
	}}
>
	{#each images as image}
		<SplideSlide>
			<img class="cover" src={image} />
		</SplideSlide>
	{/each}
</Splide>

<style>
	img {
		height: 40svh;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
</style>
