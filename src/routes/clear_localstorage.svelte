<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	if(browser){
		window.localStorage.clear();
	}
</script>
<h1>cleared</h1>