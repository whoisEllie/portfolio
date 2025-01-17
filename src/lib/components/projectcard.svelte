<script>
	export let Title;
	export let Description;
	export let Image;
	export let Alt;
</script>

<div
	class="card"
	on:click={() => {
		alert(Title);
	}}
>
	<div class="card-inner">
		<img class="image" src={Image} alt={Alt} />
		<div class="text">
			<div class="title">
				{Title}
			</div>
			<div class="description">
				{Description}
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		border-radius: 30px;
		border: 3px solid #e0e0e0;
		padding: 0.25rem;
		overflow: hidden;
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
