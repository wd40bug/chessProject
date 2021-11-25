<script>
	import Button from '$lib/Button.svelte';
</script>

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
		</div>
	</div>
	<Button>Night Mode</Button>
</nav>

<slot></slot>

<style>
    :global(body) {
        background-color: #f2eee2;
        color: #0084f6;
        transition: background-color 0.3s
    }
    :global(body.dark-mode) {
        background-color: #1d3040;
        color: #bfc2c7;
    }
    .dropbtn {
				background-color: #f2eee2;
				border-radius: 4px;
        color: black;
        padding: 2px;
        font-size: 14px;
        border: none;
    }
    :global(body.dark-mode) .dropbtn {
        background-color: #0084f6;
        color: white;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }
		:global(body.dark-mode) .dropdown-content {
				background-color: #0084f6;
				color: white;
		}

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {background-color: #ddd;}
		:global(body.dark-mode) .dropdown-content a:hover {background-color: #1d3040;
        color: white;}

    .dropdown:hover .dropdown-content {display: block; border-radius: 4px;}


    .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>