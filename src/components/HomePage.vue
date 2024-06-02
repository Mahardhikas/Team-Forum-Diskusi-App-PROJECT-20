<template>
    <nav class="navbar">
        <div class="navbar-left">
            <a href="" class="logo" >
                <imh src="./img/logo.png" alt="logo"/>
            </a>
            <div class="search-box">
                <img src="./img/search.png"/>
                <input type="text" placeholder="search">
            </div>
        </div>
        <div class="navbar-center">
            <ul>
                <li>
                    <a href="" class="active-link"><img src="./img/home.png" alt="home"></a>
                </li> 
                <li>
                    <a href="" ><img src="./img/network.png" alt="home"></a>
                </li> 
                <li>
                    <a href=""><img src="./img/jobs.png" alt="home"></a>
                </li> 
                <li>
                    <a href=""><img src="./img/message.png" alt="home"></a>
                </li> 
                <li>
                    <a href=""><img src="./img/notification.png" alt="home"></a>
                </li> 
            </ul>
        </div>
        <div class="navbar-right">
            <div class="online">
                <img src="./img/user-1.png" class="nav-profile-img"/>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
    }

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 6px;
        background: #fff;
        z-index: 100;
        top: 0;
        box-shadow: 0 5px 10px rgba(9, 0, 0, 0.1);
    }

    .logo img {
        width: 30px;
        margin-right: 15px;
        display: block;
    }

    .navbar-center ul li {
        display: inline-block;
        list-style: none;
    }
    .navbar-center ul li a {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 5px 8px;
        padding-right: 5px;
        position: relative;
    }

    .navbar-center ul li a img {
        width: 30px;
    }

    .navbar-center ul li a ::after {
        content: '';
        width: 0;
        height: 2px;
        background: 3px solid #045be6;
        position: absolute;
        bottom: -15px;
        transition: width 0.3s;
    }
    .navbar-center ul li a :hover::after 
    .navbar-center ul li a.active-link {
        width: 100%;
    }
    .nav-profile-img {
        width: 40px;
        border-radius: 50%;
        display: block;
        cursor: pointer;
        position: relative;
    }
    .online {
        position: relative;
    }

    .online::after {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border: 2px solid white;
        border-radius: 50%;
        right: 0px;
        top: 0px;
        background: green;
    }

    .search-box {
        background: #fff;
        width: 250px;
        border-radius: 20px;
        display: flex;
        padding: 0 15px;
        align-items: center;
    }

    .navbar-left {
        display: flex;
        align-items: center;
    }

    .search-box input {
        width: 100%;
        background: transparent;
        padding: 8px;
        outline: none;
        border: 0;
    }
    /* Navbar End */
</style>
