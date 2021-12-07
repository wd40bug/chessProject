<script lang='ts'>
	import type Piece from '$lib/types/piece';
	import ID from '$lib/shared/store';
	import { onMount } from 'svelte';

	export let pieces: Piece[];

	let pics: [string,string][8][8];

	for(let i = 0; i<pics.length; i++){

	}

	const getPieces = (async () => {
		const response = await fetch('http://localhost:8080/get_board?ID='+$ID);
		pieces = await response.json() as Piece[];
		console.log(pieces);
		await reload();
	});
	onMount(()=>{getPieces()})
	function reload(){
		const container = document.getElementsByClassName('imageHolder');
		for(const element of container){
			const content = element.innerHTML;
			element.innerHTML= content;
		}


		//this line is to watch the result in console , you can remove it later
		console.log("Refreshed");
	}
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
		console.log('clicked '+x+','+y);
		let result = pieces.find(b=>{
			return b.x===x && b.y === y;
		});
		//is a piece already selected?
		if(pieceSelected !== undefined){
			let finalPiece = pieceSelected;
			finalPiece.x = x;
			finalPiece.y = y;
			if(addPiece(finalPiece)){
				removePiece(pieceSelected);
			}
		} else{
			//if they selected a new piece then make it the selected piece
			if(result !== undefined){
				console.log('set '+result.color+" "+result.piece+" as pieceSelected");
				pieceSelected = result;
				console.log(pieceSelected);
			}
		}
		getPieces();
	};
	const addPiece = (async (piece: Piece) => {
		const response = await fetch('http://localhost:8080/addPiece?ID='+$ID,
			{
				method: 'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify(piece)
			});
		console.log(piece+" "+JSON.stringify(piece));
	});
	const removePiece = (async (piece: Piece) => {
		const response = await fetch('http://localhost:8080/removePiece?ID='+$ID,
			{
				method: 'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify(piece)
			});
		console.log(piece+" "+JSON.stringify(piece));
	});


</script>
<div id='imageHolderHolder'>
	{#each Array(8) as _, i}
		<div class='RowHolder'>
			{#each Array(8) as _, j}
				<div class='imageHolder' on:click={() => handleClick(j,7-i)}>
					<img draggable='true' src={getSRC(j,7-i,pieces)} alt={getAlt(j,7-i,pieces)} >
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
