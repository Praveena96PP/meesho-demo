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
                <li className="border" id="downloadApp"><i class="fa-solid fa-mobile-screen"></i> <a href="#">Download App</a>
                    <div class="app">
                        <h3>Download From</h3>
                        <a href="#"><button type="submit"><i class="fa-brands fa-google-play"></i><small>GET IT ON</small><br/>Google Play</button></a>
                        <a href="#"><button type="submit"><i class="fa-brands fa-apple"></i><small>Available on the</small><br/>App Store</button></a>
                    </div>
                </li>
                <li className="border"><a href="#">Become a Supplier</a></li>
                <li id="profileId"><i class="fa-regular fa-user"></i> <a href="#">Profile</a>
                    <div class="profile">
                        <h3>Hello User</h3>
                        <h5>To access your Meesho account</h5>
                        <button type="submit">Sign Up</button>
                        <hr/>
                        <h4><i class="fa-solid fa-suitcase"></i>My Orders</h4>
                    </div>
                </li>
                <li><i class="fa-solid fa-cart-shopping"></i> <a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Nav
