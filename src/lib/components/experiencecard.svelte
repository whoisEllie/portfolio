<script lang="ts">
	import Arrow from '$lib/icons/corner-down-right.svg';

	let { Title, Description, url }: { Title: string; Description: string; url: string } = $props();
</script>

<a class="card" href={url}>
	<div class="arrow">
		<img src={Arrow} alt="Arrow" />
	</div>
	<div class="card-inner">
		<div class="title">
			{Title}
		</div>
		<div class="description">
			{Description}
		</div>
	</div>
</a>

<style>
	a,
	a:visited,
	a:hover,
	a:active {
		color: inherit;
	}

	.card {
		display: flex;
		flex-direction: row;
		overflow: hidden;
		cursor: pointer;
		text-decoration: none;
	}

	.arrow {
		padding-left: 0;
		padding-right: 0.5rem;

		transition:
			padding-left 0.2s,
			padding-right 0.2s;
	}

	.card:hover .arrow {
		padding-left: 0.5rem;
		padding-right: 0;
	}

	.card-inner {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.title {
		font-size: 24px;
		font-weight: 500;
	}
</style>
