<script lang='ts'>
	import ChessBoard from '$lib/ChessBoard.svelte';
	import type Piece from '$lib/types/piece';
	import PieceBoard from '$lib/PieceBoard.svelte';
	import ID from '$lib/shared/store';

	const getPiecesArray = (async () => {
		const response = await fetch('http://localhost:8080/get_board?ID='+$ID);
		return await response.json() as Piece[];
	});
	const movePiece = (async (piece:Piece) => {
		const response = await fetch('http://localhost:8080/get_board',
			{ method: 'POST',
			body:JSON.stringify(piece)});
	});
</script>
<h1>Chess</h1>
<div id='board'>
	<ChessBoard />
	<div id='pieces'>
		{#await getPiecesArray()}
			<p>fetching data</p>
		{:then value}
			<PieceBoard pieces={value} />
		{:catch err}
			<p>error fetching data {err}</p>
		{/await}
	</div>
</div>

<style>
	#board{
			position: relative;
	}
	#pieces{
			top: 10px;
			left: 54px;
			position: absolute;
	}
	p{
			color: #ff3e00;
	}

</style>