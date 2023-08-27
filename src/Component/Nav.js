import React from 'react'
import '../Component/Nav.css'
function Nav() {
    return (
        <div id="navbar">
            <div id="nav-left">
                <div id="logo">
                <label><a href="#">meesho</a></label>
                </div>
                <div id="input">
                <i class="fa-solid fa-magnifying-glass"></i>  
                <input type="text" id="search" placeholder=' Try Saree, Kurti or Search by Product Code'/>
                <i class="fa-solid fa-x"></i>
                </div>
            </div>
            <div id="nav-right">
                <ul>
                    <li class="border"><i class="fa-solid fa-mobile-screen"></i> <a href="#">Download App</a></li>
                    <li class="border"><a href="#">Become a Supplier</a></li>
                    <li><i class="fa-regular fa-user"></i> <a href="#">Profile</a></li>
                    <li><i class="fa-solid fa-cart-shopping"></i> <a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
