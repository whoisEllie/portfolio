<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

	:global(body) {
		/* this will apply to <body> */
		margin: 0;
		padding: 0;
		font-family: Lexend Deca;
		background-color: #f0f0f0;

		@media (prefers-color-scheme: dark) {
			background-color: #121212;
			color: white;
		}
	}

	:global(html) {
		scroll-behavior: smooth;
	}
</style>
