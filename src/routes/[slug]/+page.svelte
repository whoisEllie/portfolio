<script lang="ts">
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="about-wrapper">
	<h1>Project title</h1>
</div>

<style>
	.about-wrapper {
		display: flex;
		width: min(auto, 440px);
		justify-self: center;
	}
</style>
