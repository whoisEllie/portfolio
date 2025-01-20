<script lang="ts">
	import type { PageProps } from '../$types';

	let { data }: any = $props();
	let Content = data.content;
</script>

<div class="about-wrapper">
	<article>
		<Content />
	</article>
</div>

<style>
	.about-wrapper {
		display: flex;
		flex-direction: column;
		width: min(100% - 15px, 840px);
		margin-inline: auto;
		justify-self: center;
		align-items: center;
	}
</style>
