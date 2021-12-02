<script lang='ts'>
	import type Piece from '$lib/types/piece';
	import ID from '$lib/shared/store';
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
	let pieceSelected:Piece;
	const handleClick = (x:number, y:number) => {
		let result = pieces.find(b=>{
			return b.x===x && b.y === y;
		});
		if(result !== undefined && pieceSelected !== undefined){
				pieceSelected = result;
		} if (result !==)
	};
	const addPiece = (async (piece: Piece) => {
		const response = await fetch('http://localhost:8080/addPiece',
			{
				method: 'POST',
				body: JSON.stringify({
					id: $ID,
					piece: piece
				})
			});
	});
	const removePiece = (async (piece: Piece) => {
		const response = await fetch('http://localhost:8080/removePiece',
			{
				method: 'POST',
				body: JSON.stringify({
					id: $ID,
					piece: piece
				})
			});
	});


</script>
<div id='imageHolderHolder'>
	{#each Array(8) as _, i}
		<div class='RowHolder'>
			{#each Array(8) as _, j}
				<div class='imageHolder' >
					<img draggable='true' src={getSRC(j,7-i,pieces)} alt={getAlt(j,7-i,pieces)} onclick={handleClick(j,7-1)}>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
    :global(.dark) img {
        filter: brightness(50%);
    }

    img {
        width: 50px;
        height: 50px;
        color: red;
    }
		.imageHolder{
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
