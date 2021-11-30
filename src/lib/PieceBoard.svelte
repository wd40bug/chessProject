<script lang='ts'>
	import type Piece from '$lib/types/piece';

	export let pieces: Piece[];
	const getSRC = (x: number, y: number, pieces: Piece[]) => {
		let result = pieces.find(b => {
			return b.x === x && b.y === y;
		});
		if (result != undefined) {
			return result.color + '_' + result.piece + '.png';
		} else {
			return '//:0';
		}
	};
	const thingy = new Array(pieces.length);
	for (let i = 0; i < 8; i++) {
		for(let j = 0; j<8;j++){
			thingy.push(getSRC(i,j,pieces));
		}
	}
	const getAlt = (x: number, y: number, pieces: Piece[]) => {
		let result = pieces.find(b => {
			return b.x === x && b.y === y;
		});
		if (result != undefined) {
			return result.color + ' ' + result.piece;
		} else {
			return ' ';
		}
	};
</script>
<div id='imageHolderHolder'>
	{#each Array(8) as _, i}
		<div class='imageHolder'>
			{#each Array(8) as _, j}
				<img src={getSRC(j,7-i,pieces)} alt={getAlt(j,7-i,pieces)}>
			{/each}
		</div>
	{/each}
</div>

<style>
		:global(.dark) img{
				filter: brightness(50%);
		}
    img {
        width: 50px;
        height: 50px;
        color: red;
    }
    .imageHolder {
        display: inline-flex;
        flex-direction: row;
    }

    #imageHolderHolder {
        display: inline-flex;
        flex-direction: column;
    }
</style>
