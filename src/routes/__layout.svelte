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
		</div>
	</div>

</nav>

<slot></slot>

<style>
    .dropbtn {
				background-color: white;
        color: black;
        padding: 2px;
        font-size: 14px;
        border: none;
    }

    .dropdown {
        position: relative;
        display: inline-block;
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

    .dropdown:hover .dropdown-content {display: block;}

    .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>