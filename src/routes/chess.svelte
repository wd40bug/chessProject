<script lang='ts'>
	import ChessBoard from '$lib/ChessBoard.svelte';
	import type Piece from "$lib/types/piece"

	const getBoard = async =>{
		fetch("http://localhost:8080/get_board")
			.then((response) => response.json())
			.then((data) => JSON.parse(data.content))
			.then((data) => data as Piece[]);
	}
</script>
<h1>Chess</h1>
<ChessBoard/>