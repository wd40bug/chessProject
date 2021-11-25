<script>
	import Column from '$lib/Column.svelte';

	export const size = 8;
</script>

<div class='verNum'>
	<div class='horNum'>
		<div class='coordinateHolderHor'>
			{#each Array(size) as _, i}
				<div class='coordinate'>
					<br>{size - 1 - i}
				</div>
			{/each}

		</div>
		<div class='row'>
			{#each Array(size) as _, i}
				<Column id={i} size={size} />
			{/each}
		</div>
	</div>
	<div class='coordinateHolderVer'>
		<div class='coordinate'></div>

		{#each Array(size) as _, i}
			<div class='coordinate'>
				<br>{i}
			</div>
		{/each}

	</div>
</div>


<style>
    .verNum {
        display: inline-flex;
        flex-direction: column;
    }

    .coordinateHolderVer {
        display: inline-flex;
        flex-direction: row;
        font-size: 24px;
        width: 450px;
        text-align: center;
    }

    .coordinate {
        height: 50px;
        width: 50px;
        line-height: 20px;
        text-align: center;
        vertical-align: center;
    }

    .coordinateHolderHor {
        display: inline-flex;
        flex-direction: column;
        font-size: 24px;
        height: 400px;
        text-align: center;
    }

    .horNum {
        display: inline-flex;
        flex-direction: row;
    }

    .row {
        display: inline-flex;
        flex-direction: row;
        border-style: solid;
        border-width: 5px;
        border-color: navy;
    }
</style>