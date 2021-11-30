<script lang="ts">
	import DarkMode from "svelte-dark-mode";
	import { onMount } from 'svelte';
	import ID from '$lib/shared/store'

	let theme;

	$: switchTheme = theme === "dark" ? "light" : "dark";
	onMount(()=>{	$: document.body.className = theme;})
</script>
<DarkMode bind:theme/>
<nav>
	<a href = '/'>Home</a>
	<a href = '/about'>About</a>
	<a href = '/todos'>Todos</a>
<!--	<select name='games' id='game'>-->
<!--		<option value='games'>Games</option>-->
<!--		<option value='chess'>Chess</option>-->
<!--	</select>-->
	<div class="dropdown">
		<button class="dropbtn">Games</button>
		<div class="dropdown-content">
			<a href="/chess">Chess</a>
			<a href='/api_testing'>API Testing</a>
			<a href='/clear_localstorage'>Clear Local Storage</a>
		</div>
	</div>
<!--	<Button>Night Mode</Button>-->
	<button on:click={() => {theme = switchTheme; location.reload(); } } id='modeSwitcher' class='dropbtn'>
		Mode: {theme}
	</button>
	<p id = 'IDholder'>{$ID}</p>
</nav>

<slot></slot>

<style>
    /*:global(body) {*/
    /*    background-color: #f2eee2;*/
    /*    color: #0084f6;*/
    /*    transition: background-color 0.3s*/
    /*}*/
		#IDholder{
				color: #570f0f;
		}
    :global(.dark) {
        background: #00020c;
        color: #3a3a3d;
    }
		:global(.dark) #modeSwitcher{
        background: #04132b;
				border-color: #041b40;
        color: #f1f8ff;
				border-radius: 5px;
				border-width: 2px;
				border-style: solid;
				font-size: 14px;
				padding: 2px;
		}
		:global(.dark) .dropbtn{
        background: #04132b;
        border-color: #041b40;
        color: #f1f8ff;
        border-width: 2px;
        border-radius: 5px;
				border-style: solid;
		}
    /*:global(body.dark-mode) {*/
    /*    background-color: #1d3040;*/
    /*    color: #bfc2c7;*/
    /*}*/
    .dropbtn {
				background-color: #f2eee2;
				border-radius: 5px;
        color: black;
        padding: 2px;
        font-size: 14px;
        border: none;
    }
    /*:global(body.dark-mode) .dropbtn {*/
    /*    background-color: #0084f6;*/
    /*    color: white;*/
    /*}*/

    .dropdown {
        position: relative;
        display: inline-block;
    }
		/*:global(body.dark-mode) .dropdown-content {*/
		/*		background-color: #0084f6;*/
		/*		color: white;*/
		/*}*/

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
		:global(.dark) .dropdown-content a {
			color: #98989d;
			background-color: #041b40;
		}
		:global(.dark) .dropdown-content a:hover {
				background-color: #0084f6;
		}
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {background-color: #ddd;}
		/*:global(body.dark-mode) .dropdown-content a:hover {background-color: #1d3040;*/
    /*    color: white;}*/

    .dropdown:hover .dropdown-content {display: block; border-radius: 4px;}


    .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>