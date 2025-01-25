<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	let { images } = $props();
</script>

<div class="carousel">
	<Splide
		options={{
			type: 'loop',
			width: 'min(100vw - 1.5rem, 840px)',
			autoHeight: true
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
		width: min(100vw - 1.5rem, 840px);
		object-fit: cover;
	}
</style>
