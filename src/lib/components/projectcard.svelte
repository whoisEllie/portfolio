<script lang="ts">
	let {
		Title,
		Description,
		Image,
		Alt,
		slug
	}: { Title: string; Description: string; Image: string; Alt: string; slug: string } = $props();
</script>

<a class="card" href={slug}>
	<div class="card-inner">
		<img class="image" src={Image} alt={Alt} draggable="false" />
		<div class="text">
			<div class="title">
				{Title}
			</div>
			<div class="description">
				{Description}
			</div>
		</div>
	</div>
</a>

<style>
	.card {
		border-radius: 30px;
		border: 3px solid #e0e0e0;
		padding: 0.25rem;
		overflow: hidden;
		cursor: pointer;
		text-decoration: none;
		color: black;
		box-shadow:
			8px 8px 16px #cccccc,
			-8px -8px 16px #ffffff;
	}

	.card-inner {
		display: flex;
		overflow: hidden;
		border-radius: 25px;
	}

	.image {
		aspect-ratio: 16 / 9;
		height: 150px;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
	}

	.title {
		font-size: 24px;
		font-weight: 500;
	}
</style>
