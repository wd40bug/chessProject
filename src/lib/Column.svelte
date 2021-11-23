<script>
	import Tile from '$lib/Tile.svelte';
	export let id;
	let offset = id%2;
</script>

<div class='column'>
	{#each Array(10) as _, i}
		{#if (i+offset)%2===0}
			<Tile dark={true}/>
		{:else}
			<Tile dark={false}/>
		{/if}
	{/each}
</div>


<style>
	.column{
			display: flex;
			flex-direction: column;
	}
</style>