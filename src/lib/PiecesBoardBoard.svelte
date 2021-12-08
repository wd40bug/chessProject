<script lang="ts">
	export let pics;
	export let handleClick: (x,y) => void;
</script>

<div id='imageHolderHolder'>
	{#each Array(8) as _, i}
		<div class='RowHolder'>
			{#each Array(8) as _, j}
				<div class='imageHolder' on:click={() => handleClick(j,7-i)}>
					<img draggable='true' src={pics[j][7-i][0]} alt={pics[j][7-i][1]}>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
    img {
        width: 50px;
        height: 50px;
        color: red;
    }
    :global(.dark) img {
        filter: brightness(50%);
    }

    .imageHolder {
        width: 50px;
        height: 50px;
    }

    .RowHolder {
        display: inline-flex;
        flex-direction: row;
    }
    #imageHolderHolder {
        display: inline-flex;
        flex-direction: column;
    }
</style>