<script lang="ts">
	let { data }: any = $props();
	let Content = data.content;
</script>

<a class="back" href="/">Back</a>
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
		margin-top: 10svh;
		margin-bottom: 15svh;
		justify-self: center;
		align-items: center;
	}

	.back {
		position: fixed;
		top: 10px;
		left: 10px;
		text-decoration: none;
		color: black;
		padding: 5px 10px;
		border-radius: 10px;
		background-color: #e0e0e0;
	}
</style>
