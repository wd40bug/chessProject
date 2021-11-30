<script lang='ts'>
	export let dark:boolean;
	let color = dark? 'black' : 'white';
</script>
<div class={color}>

</div>
<style>
		.white{
				background-color: white;
		}
		.black{
				background-color: #a12435;
		}
		:global(.dark) .white{
				background-color: #595656;
		}
		:global(.dark) .black{
				background-color: #570f0f;
		}
	div{
			width: 50px;
			height: 50px;
	}
</style>