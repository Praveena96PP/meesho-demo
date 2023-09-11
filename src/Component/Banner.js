import React from 'react'
import ban1 from '../Component/images/ban1.jpg'
import ban21 from '../Component/images/ban21.jpg'
import ban22 from '../Component/images/ban22.jpg'
import ban23 from '../Component/images/ban23.jpg'
import ban24 from '../Component/images/ban24.jpg'
import ban25 from '../Component/images/ban25.jpg'
import ban26 from '../Component/images/ban26.jpg'
import ban27 from '../Component/images/ban27.jpg'
import ban28 from '../Component/images/ban28.jpg'
import ban29 from '../Component/images/ban29.jpg'
import ban210 from '../Component/images/ban210.jpg'
import ban211 from '../Component/images/ban211.jpg'
import ban212 from '../Component/images/ban212.jpg'
import ban31 from '../Component/images/ban31.jpg'
import ban32 from '../Component/images/ban32.jpg'
import ban33 from '../Component/images/ban33.jpg'
import ban34 from '../Component/images/ban34.jpg'
import ban35 from '../Component/images/ban35.jpg'
import ban36 from '../Component/images/ban36.jpg'
import ban41 from '../Component/images/ban41.jpg'
import ban42 from '../Component/images/ban42.jpg'
import ban43 from '../Component/images/ban43.jpg'
import ban44 from '../Component/images/ban44.jpg'
import ban45 from '../Component/images/ban45.jpg'
import ban46 from '../Component/images/ban46.jpg'
import ban5 from '../Component/images/ban5.jpg'
import ban6 from '../Component/images/ban6.jpg'
import '../Component/banner.css'

function Banner() {
    return (
        <div>
            <div id="banner1">
                <div id="left1">
                <h1 id="heading1">Lowest Prices <br/>Best Quality Shopping</h1>
                <ul>
                    <li><i class="fa-solid fa-truck"></i>Free <br/>Delivery</li>
                    <li className="line"><i class="fa-solid fa-sack-dollar"></i>Cash on <br/>Delivery</li>
                    <li className="line"><i class="fa-solid fa-right-left"></i>Easy <br/>   Returns</li>
                </ul>
                <button id="btn1"type="submit"><i class="fa-brands fa-google-play"></i>Download the Meesho App</button>
                </div>
                <div id="right1">
                <img src={ban1} alt='banner1'/>
                </div>
            </div>
            <div id="topic-line"><h1>Top Categories to choose from</h1></div>
            <div id="banner2">
                <div id="left2">
                    <a href="#"><h2>Women's Stores</h2></a>
                    <div id="ban2-left_top">
                    <a href="#"><img src={ban21} alt="banner21"/></a>
                    <a href="#"><img src={ban22} alt="banner22"/></a>
                    </div>
                    <div id="ban2-left_bottom">
                    <a href="#"><img src={ban23} alt="banner23"/></a>
                    <a href="#"><img src={ban24} alt="banner24"/></a>
                    </div>
                </div>
                <div id="right2">
                    <div><h1>Be fashion Forward</h1></div>
                    <div id="rightside">
                    <div id="right-left">
                    <a href="#"><h2>Men's Stores</h2></a>
                        <div id="right-left-top">
                        <a href="#"><img src={ban25} alt="banner25"/></a>
                        <a href="#"><img src={ban26} alt="banner26"/></a>
                        </div>
                        <div id="right-left-bottom">
                        <a href="#"><img src={ban27} alt="banner27"/></a>
                        <a href="#"><img src={ban28} alt="banner28"/></a>
                        </div>
                    </div>
                    <div id="right-right">
                    <a href="#"><h2>Kid's Stores</h2></a>
                        <div id="right-right-top">
                        <a href="#"><img src={ban29} alt="banner29"/></a>
                        <a href="#"><img src={ban210} alt="banner210"/></a>
                        </div>
                        <div id="right-right-bottom">
                        <a href="#"><img src={ban211} alt="banner211"/></a>
                        <a href="#"><img src={ban212} alt="banner212"/></a>  
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div id="banner3">
                <div id="ban3-left">
                <h1>Essentials</h1>
                <button type="submit">View All</button>
                </div>
                <div id="ban3-right">
                    <div id="ban3-right1">
                        <div id="ban3-img">
                            <a href="#"><img src={ban31} alt="banner31"/></a>
                            <a href="#"><img src={ban34} alt="banner32"/></a>
                        </div>
                        <button type="submit">Home Decor</button>
                    </div>
                    <div id="ban3-right1">
                        <div id="ban3-img">
                            <a href="#"><img src={ban32} alt="banner33"/></a>
                            <a href="#"><img src={ban35} alt="banner34"/></a>
                        </div>
                        <button type="submit">Kitchen Appliances</button>
                    </div>
                    <div id="ban3-right1">
                        <div id="ban3-img">
                            <a href="#"><img src={ban33} alt="banner35"/></a>
                            <a href="#"><img src={ban36} alt="banner36"/></a>
                        </div>
                        <button type="submit">Health Care</button>
                    </div>
                </div>
            </div>
            <div id="banner4">
                <div id="ban4-left">
                <h1>New Styles</h1>
                <button type="submit">View All</button>
                </div>
                <div id="ban4-right">
                    <div id="ban4-right1">
                        <div id="ban4-img">
                            <a href="#"><img src={ban41} alt="banner41"/></a>
                            <a href="#"><img src={ban44} alt="banner42"/></a>
                        </div>
                        <button type="submit">Accessories</button>
                    </div>
                    <div id="ban4-right1">
                        <div id="ban4-img">
                            <a href="#"><img src={ban42} alt="banner43"/></a>
                            <a href="#"><img src={ban45} alt="banner44"/></a>
                        </div>
                        <button type="submit">Footwear</button>
                    </div>
                    <div id="ban4-right1">
                        <div id="ban4-img">
                            <a href="#"><img src={ban43} alt="banner45"/></a>
                            <a href="#"><img src={ban46} alt="banner46"/></a>
                        </div>
                        <button type="submit">Electronics</button>
                    </div>
                </div>
            </div>
            <div id="banner5">
                <div id="ban5-left">
                    <img src={ban5} alt="banner5"/>
                </div>
                <div id="ban5-right">
                    <h2>Become a Reseller and</h2>
                    <h1>Start your Online Business<br/>with Zero Investment</h1>
                    <button><i class="fa-brands fa-google-play"></i>
                    GET IT ON<br/><span>Google Pay</span></button>
                    <button><i class="fa-brands fa-apple"></i>
                    Available on the<br/><span>App Store</span></button>
                </div>
            </div>
        
            <div id="banner6">
                <div id="ban6-left">
                <a href="#">
                <h1>Register as a Meesho Supplier</h1>
                <h3>Sell your products to crores of customers at 0% commission</h3>
                <ul>
                    <li><i class="fa-solid fa-circle-check"></i>Grow your business 10x</li>
                    <li>|</li>
                    <li><i class="fa-solid fa-circle-check"></i>Enjoy 100% Profit</li>
                    <li>|</li>
                    <li><i class="fa-solid fa-circle-check"></i>Sell all over India</li>
                </ul>
                <button>Sign up now</button>
                </a>
                </div>
                <div id="ban6-right">
                    <a href="#"><img src={ban6} alt="banner6"/></a>
                </div>
            </div>
        </div>
    )
}

export default Banner
