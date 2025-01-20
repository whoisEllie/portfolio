<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error">
	<h1>{page.status}</h1>
	<h1>{page?.error?.message}</h1>
</div>

<style>
	.error {
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-self: center;
		align-items: center;
	}
</style>
