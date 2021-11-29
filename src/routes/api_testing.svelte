<script lang='ts'>
	import type Piece from '$lib/types/Piece';
	let characterName;

	const getRandom = (max:number) =>{
		Math.floor(Math.random()*max)
	}

	fetch('https://swapi.dev/api/people/1')
		.then((response) => response.json())
		.then((character) => {
			characterName = character.name;
		})
	const getPiecesArray = (async () => {
		const response = await fetch('http://localhost:8080/get_board')
		return await response.json() as Piece[];
	})
</script>
<main>
	{characterName}
</main>
{#await getPiecesArray()}
	<p>Waiting for array</p>
	{:then data}
	<p>{data.at(-1).color} {data.at(-1).piece}</p>
	{/await}
