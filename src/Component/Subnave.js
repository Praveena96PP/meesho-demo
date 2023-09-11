import React, { useState } from 'react'
import '../Component/Nav.css'

function Subnave() {

    const[isOpen, setIsOpen]=useState(false)
    const[isOpen1, setIsOpen1]=useState(false)
    const[isOpen2, setIsOpen2]=useState(false)
    const[isOpen3, setIsOpen3]=useState(false)
    const[isOpen4, setIsOpen4]=useState(false)
    const[isOpen5, setIsOpen5]=useState(false)
    const[isOpen6, setIsOpen6]=useState(false)
    const[isOpen7, setIsOpen7]=useState(false)
    const[isOpen8, setIsOpen8]=useState(false)

    return (
        <div id="subNav">
            <div id="sub-nav">
                <ul>
                    <li className='list1'onClick={()=>setIsOpen(!isOpen)}><a href="#">Women Ethnic</a></li>
                    <li className='list2'onClick={()=>setIsOpen1(!isOpen1)}><a href="#">Women Western</a></li>
                    <li className='list3'onClick={()=>setIsOpen2(!isOpen2)}><a href="#">Men</a></li>
                    <li className='list4'onClick={()=>setIsOpen3(!isOpen3)}><a href="#">Kids</a></li>
                    <li className='list5'onClick={()=>setIsOpen4(!isOpen4)}><a href="#">Home & Kitchen</a></li>
                    <li className='list6'onClick={()=>setIsOpen5(!isOpen5)}><a href="#">Beauty & Health</a></li>
                    <li className='list7'onClick={()=>setIsOpen6(!isOpen6)}><a href="#">Jewllery & Accessories</a></li>
                    <li className='list8'onClick={()=>setIsOpen7(!isOpen7)}><a href="#">Bags & Footwear</a></li>
                    <li className='list9'onClick={()=>setIsOpen8(!isOpen8)}><a href="#">Electronics</a></li>
                </ul>
            </div>
        { isOpen && <div className="div1">
            <div class="divbox1">
                <div class="div11">
                    <h3>All Women Ethnic</h3>
                    <ul><li><a href="#">View All</a></li></ul>
                </div>
                <div class="div12">
                    <h3>Sarees</h3>
                    <ul>
                        <li><a href="#">All Sarees</a></li>
                        <li><a href="#">Silk Sarees</a></li>
                        <li><a href="#">Cotton Silk Sarees</a></li>
                        <li><a href="#">Cotton Sarees</a></li>
                        <li><a href="#">Georgette Sarees</a></li>
                        <li><a href="#">Chiffon Sarees</a></li>
                        <li><a href="#">Embroidered Sarees</a></li>
                    </ul>
                </div>
                <div class="div13">
                    <h3>Kurtis</h3>
                    <ul>
                        <li><a href="#">All Kurtis</a></li>
                        <li><a href="#">Anarkali Kurtis</a></li>
                        <li><a href="#">Rayon Kurtis</a></li>
                        <li><a href="#">Cotton Kurtis</a></li>
                        <li><a href="#">Embroidered Kurtis</a></li>
                    </ul>
                </div>
                <div class="div14">
                    <h3>Kurta Sets</h3>
                    <ul><li><a href="#">All Kurta Sets</a></li></ul>
                </div>
                <div class="div15">
                    <h3>Suits & Dress Material</h3>
                    <ul>
                        <li><a href="#">All Suits & Dress Material</a></li>
                        <li><a href="#">Cotton Suits</a></li>
                        <li><a href="#">Embroidered Suits</a></li>
                        <li><a href="#">Chanderi Suits</a></li>
                    </ul>
                </div>
                <div class="div16">
                    <h3>Other Ethnic</h3>
                    <ul>
                        <li><a href="#">Blouses</a></li>
                        <li><a href="#">Dupattas</a></li>
                        <li><a href="#">Lehanga</a></li>
                        <li><a href="#">Gown</a></li>
                        <li><a href="#">Ethnic Bottomwear</a></li>
                    </ul>
                </div>
            </div>
        </div>}
        { isOpen1 && <div class="div2">
            <div class="divbox2">
            <div class="div21">
                <h3>Topwear</h3>
                <ul>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Sweaters</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                </ul>
            </div>
            <div class="div22">
                <h3>Bottomwear</h3>
                <ul>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Jeggings</a></li>
                    <li><a href="#">Palazzos</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Skirts</a></li>
                </ul>
            </div>
            <div class="div23">
                <h3>Innerwear</h3>
                <ul>
                    <li><a href="#">Bra</a></li>
                    <li><a href="#">Briefs</a></li>
                </ul>
            </div>
            <div class="div24">
                <h3>Sleepwear</h3>
                <ul>
                    <li><a href="#">Nightsuits</a></li>
                    <li><a href="#">Babydolls</a></li>
                </ul>
            </div>
            </div>
        </div>
        }
        {isOpen2 && <div class="div3">
        <div class="divbox3">
        <div class="div31">
            <h3>Topwear</h3>
            <ul>
                <li><a href="#">All Top Wear</a></li>
                <li><a href="#">Tshirts</a></li>
                <li><a href="#">Shirts</a></li>
            </ul>
        </div>
        <div class="div32">
            <h3>Bottomwear</h3>
            <ul>
                <li><a href="#">Track Pants</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Trousers</a></li>
            </ul>
        </div>
        <div class="div33">
            <h3>Men Accessories</h3>
            <ul>
                <li><a href="#">All Men Accessories</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Belts</a></li>
                <li><a href="#">Wallets</a></li>
                <li><a href="#">Jewellery</a></li>
                <li><a href="#">Sunglasses</a></li>
                <li><a href="#">Bags</a></li>
            </ul>
        </div>
        <div class="div34">
            <h3>Men Footwear</h3>
            <ul>
                <li><a href="#">Casual Shoes</a></li>
                <li><a href="#">Sports Shoes</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Formal Shoes</a></li>
            </ul>
        </div>
        <div class="div35">
            <h3>Ethnic Wear</h3>
            <ul>
                <li><a href="#">Men Kurtas</a></li>
                <li><a href="#">Ethnic Jackets</a></li>
            </ul>
        </div>
        <div class="div36">
            <h3>Inner & Sleepwear</h3>
            <ul>
                <li><a href="#">All Inner & Sleepwear</a></li>
                <li><a href="#">Vests</a></li>
            </ul>
        </div>
        </div>
    </div>
        }

        {isOpen3 && <div class="div4">
        <div class="divbox4">
        <div class="div41">
            <h3>Boys & Girls 2+ Years</h3>
            <ul><li><a href="#">Dresses</a></li></ul>
        </div>
        <div class="div42">
            <h3>Infant 0-2 Years</h3>
            <ul><li><a href="#">Rompers</a></li></ul>
        </div>
        <div class="div43">
            <h3>Toys & Accessories</h3>
            <ul>
                <li><a href="#">Soft Toys</a></li>
                <li><a href="#">Footwear</a></li>
                <li><a href="#">Stationery</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Bags & Backpacks</a></li>
            </ul>
        </div>
        <div class="div44">
            <h3>Baby care</h3>
            <ul><li><a href="#">All Baby care</a></li></ul>
        </div>
        </div>
    </div>
        }
        {isOpen4 && <div class="div5">
        <div class="divbox5">
        <div class="div51">
            <h3>Home Furnishing</h3>
            <ul>
                <li><a href="#">Bedsheets</a></li>
                <li><a href="#">Doormats</a></li>
                <li><a href="#">Curtains & Sheers</a></li>
                <li><a href="#">Cushions & Cushion Covers</a></li>
                <li><a href="#">Mattress Protectors</a></li>
            </ul>
        </div>
        <div class="div52">
            <h3>Home Decor</h3>
            <ul>
                <li><a href="#">All Home Decor</a></li>
                <li><a href="#">Stickers</a></li>
                <li><a href="#">Clocks</a></li>
                <li><a href="#">Showpieces</a></li>
            </ul>
        </div>
        <div class="div53">
            <h3>Kitchen & Dining</h3>
            <ul>
                <li><a href="#">Kitchen Storage</a></li>
                <li><a href="#">Cookware & Bakeware</a></li>
            </ul>
        </div>
        </div>
    </div>
        }
        {isOpen5 && <div class="div6">
        <div class="divbox6">
        <div class="div61">
            <h3>Make up</h3>
            <ul>
                <li><a href="#">Face</a></li>
                <li><a href="#">Eyes</a></li>
                <li><a href="#">Lips</a></li>
                <li><a href="#">Nails</a></li>
            </ul>
        </div>
        <div class="div62">
            <h3>Wellness</h3>
            <ul>
                <li><a href="#">Sanitizers</a></li>
                <li><a href="#">Oral Care</a></li>
                <li><a href="#">Feminine Hygiene</a></li>
            </ul>
        </div>
        <div class="div63">
            <h3>Skincare</h3>
            <ul>
                <li><a href="#">Deodorants</a></li>
            </ul>
        </div>
        </div>
    </div>
        }
        {isOpen6 && <div class="div7">
        <div class="divbox7">
        <div class="div71">
            <h3>Jewellery</h3>
            <ul>
                <li><a href="#">Jewellery Set</a></li>
                <li><a href="#">Earrings</a></li>
                <li><a href="#">Mangalsutras</a></li>
                <li><a href="#">Studs</a></li>
                <li><a href="#">Bangles</a></li>
                <li><a href="#">Necklaces</a></li>
                <li><a href="#">Rings</a></li>
                <li><a href="#">Anklets</a></li>
            </ul>
        </div>
        <div class="div72">
            <h3>Wellness</h3>
            <ul>
                <li><a href="#">Women Accessory</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Hair Accessories</a></li>
                <li><a href="#">Sunglasses</a></li>
                <li><a href="#">Socks</a></li>
            </ul>
        </div>
        </div>
    </div>
        }
        {isOpen7 && <div class="div8">
        <div class="divbox8">
        <div class="div81">
            <h3>Women Bags</h3>
            <ul>
                <li><a href="#">All Women Bags</a></li>
                <li><a href="#">Handbags</a></li>
                <li><a href="#">Clutches</a></li>
                <li><a href="#">Slingbags</a></li>
            </ul>
        </div>
        
        <div class="div82">
            <h3>Men Bags</h3>
            <ul>
                <li><a href="#">All Men Bags</a></li>
                <li><a href="#">Men Wallets</a></li>
            </ul>
        </div>
        <div class="div83">
            <h3>Men Footwear</h3>
            <ul>
                <li><a href="#">Sports Shoes</a></li>
                <li><a href="#">Casual Shoes</a></li>
                <li><a href="#">Formal Shoes</a></li>
                <li><a href="#">Sandals</a></li>
            </ul>
        </div>
        <div class="div84">
            <h3>Women Footwear</h3>
            <ul>
                <li><a href="#">Flats</a></li>
                <li><a href="#">Bellies</a></li>
                <li><a href="#">Juttis</a></li>
            </ul>
        </div>
        </div>
    </div>
        }
        {isOpen8 && <div class="div9">
        <div class="divbox9">
        <div class="div91">
            <h3>Mobile Accessories</h3>
            <ul>
                <li><a href="#">All Mobile & Accessories</a></li>
                <li><a href="#">Smart Watches</a></li>
                <li><a href="#">Mobile Holders</a></li>
                <li><a href="#">Mobile cases & covers</a></li>
            </ul>
        </div>
        
        <div class="div92">
            <h3>Appliances</h3>
            <ul>
                <li><a href="#">All Appliances</a></li>
                <li><a href="#">Grooming</a></li>
                <li><a href="#">Home Appliances</a></li>
            </ul>
        </div>
        </div>
    </div>

        }

    </div>
    )
}

export default Subnave
