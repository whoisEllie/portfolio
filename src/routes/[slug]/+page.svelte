<script lang="ts">
	let { data }: any = $props();
	let Content = data.content;
</script>

<a href="/">Back</a>
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
		margin-top: 15svh;
		justify-self: center;
		align-items: center;
	}
</style>
