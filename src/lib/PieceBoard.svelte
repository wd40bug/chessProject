<script lang='ts'>
	import type Piece from '$lib/types/piece';
	import ID from '$lib/shared/store';
	import { onMount } from 'svelte';
	import PiecesBoardBoard from '$lib/PiecesBoardBoard.svelte';

	export let pieces: Piece[];
	type imageTuple = [string, string]
	let pics: imageTuple[][];
	$: pics;


	const getPieces = (async () => {
		const response = await fetch('http://localhost:8080/get_board?ID=' + $ID);
		pieces = await response.json() as Piece[];
		console.log(pieces);
		await reload();
	});
	onMount(() => {
		getPieces();
		updatePics();
	});

	function reload() {
		updatePics();
		console.log('Refreshed');
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
	let pieceSelected: Piece;
	const handleClick = (x: number, y: number) => {
		console.log('clicked ' + x + ',' + y);
		let result = pieces.find(b => {
			return b.x === x && b.y === y;
		});
		//is a piece already selected?
		if (pieceSelected !== undefined) {
			let finalPiece = pieceSelected;
			finalPiece.x = x;
			finalPiece.y = y;
			if (addPiece(finalPiece)) {
				removePiece(pieceSelected);
			}
		} else {
			//if they selected a new piece then make it the selected piece
			if (result !== undefined) {
				console.log('set ' + result.color + ' ' + result.piece + ' as pieceSelected');
				pieceSelected = result;
				console.log(pieceSelected);
			}
		}
		getPieces();
	};
	const addPiece = (async (piece: Piece) => {
		const response = await fetch('http://localhost:8080/addPiece?ID=' + $ID,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(piece)
			});
		console.log(piece + ' ' + JSON.stringify(piece));
	});
	const removePiece = (async (piece: Piece) => {
		const response = await fetch('http://localhost:8080/removePiece?ID=' + $ID,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(piece)
			});
		console.log(piece + ' ' + JSON.stringify(piece));
	});
	const updatePics = () => {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				pics[i].push([getSRC(i, j, pieces), getAlt(i, j, pieces)]);
			}
		}
	};
</script>

<PiecesBoardBoard pics={pics} handleClick={handleClick}/>


