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
				background-color: brown;
		}
	div{
			width: 50px;
			height: 50px;
	}
</style>