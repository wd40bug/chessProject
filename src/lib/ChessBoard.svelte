<div class='row'>
	{#each Array(10) as _, i}
		<Column id={i}/>
	{/each}
</div>
<script>
	import Column from '$lib/Column.svelte';
</script>

<style>
	.row{
			display: inline-flex;
			flex-direction: row;
			border-style: solid;
			border-width: 5px;
			border-color: navy;
	}
</style>