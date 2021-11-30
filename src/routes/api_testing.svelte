<script lang='ts'>
	import type Piece from '$lib/types/Piece';
	let characterName;
	import ID from '$lib/shared/store';

	fetch('https://swapi.dev/api/people/1')
		.then((response) => response.json())
		.then((character) => {
			characterName = character.name;
		})
	const getPiecesArray = (async () => {
		const response = await fetch('http://localhost:8080/get_board?ID='+$ID);
		return await response.json() as Piece[];
	});
</script>
<main>
	{characterName}
</main>
{#await getPiecesArray()}
	<p>Waiting for array</p>
	{:then data}
	{#each data as piece}
		<p>{piece.color} {piece.piece}</p>
		{/each}
	{/await}
