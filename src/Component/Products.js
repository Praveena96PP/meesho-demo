import React, { useState } from 'react'
import '../Component/Products.css'
function Products() {
  const [isShow, setIsShow]=useState(false)
  const [isShow1, setIsShow1]=useState(false)
  const [isShow2, setIsShow2]=useState(false)
  const [isShow3, setIsShow3]=useState(false)
  const [isShow4, setIsShow4]=useState(false)
  const [isShow5, setIsShow5]=useState(false)
  const [isShow6, setIsShow6]=useState(false)
  const [isShow7, setIsShow7]=useState(false)
  const [isShow8, setIsShow8]=useState(false)
  const [isShow9, setIsShow9]=useState(false)
  const [isShow10, setIsShow10]=useState(false)
  const [isShow11, setIsShow11]=useState(false)
  const [isShow12, setIsShow12]=useState(false)
  const [isShow13, setIsShow13]=useState(false)
  const [isShow14, setIsShow14]=useState(false)
  const [isShow15, setIsShow15]=useState(false)
  const [isShow16, setIsShow16]=useState(false)
  const [isShow17, setIsShow17]=useState(false)
  const [isShow18, setIsShow18]=useState(false)
  const [isShow19, setIsShow19]=useState(false)
  const [isShow20, setIsShow20]=useState(false)
  const [isShow21, setIsShow21]=useState(false)
  const [isShow22, setIsShow22]=useState(false)
  const [isShow23, setIsShow23]=useState(false)
  const [isShow24, setIsShow24]=useState(false)
  const [isShow25, setIsShow25]=useState(false)
  const [isShow26, setIsShow26]=useState(false)
  const [isShow27, setIsShow27]=useState(false)
  const [isShow28, setIsShow28]=useState(false)
  const [isShow29, setIsShow29]=useState(false)
  const [isShow30, setIsShow30]=useState(false)
  const [isShow31, setIsShow31]=useState(false)
  const [isShow32, setIsShow32]=useState(false)
  const [isShow33, setIsShow33]=useState(false)
  const [isShow34, setIsShow34]=useState(false)
  const [isShow35, setIsShow35]=useState(false)
  const [isShow36, setIsShow36]=useState(false)
  const [isShow37, setIsShow37]=useState(false)
  const [isShow38, setIsShow38]=useState(false)
  const [isShow39, setIsShow39]=useState(false)
  const [isShow40, setIsShow40]=useState(false)
    return (
        <div>
          <div id="products">
            <h1>Products For You</h1>
              <div id="products-top">
                <div className="sort" onClick={()=>setIsShow(!isShow)}>
                <h4>Sort by: <span>Relevance</span></h4>
                <i class="fa-solid fa-angle-down"></i>
                </div>
              </div>
              {isShow && <div class="sortList">
                <ul>
                    <li><a href="#">Relevance</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Price (Hogh to Low)</a></li>
                    <li><a href="#">Price (Low to High)</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Discounts</a></li>
                </ul>
            </div>

              }

              <div id="products-bottom">
                <div id="filters">
                    <h3>FILTERS</h3>
                    <h5>1000+ Products</h5>
                    <hr/>
                    <div className="category"onClick={()=>setIsShow1(!isShow1)}><h3>Category</h3><i class="fa-solid fa-angle-down"></i></div>
                    { isShow1 && <div class="checkbox">
                        <div id="checkbox-top">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          <input type="text" id="search"name="search"placeholder='Search'/>
                        </div>
                        <div id="checkbox-bottom">
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Analog Watches</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bangles & Bracelets</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bedsheets</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bike Covers</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Blouses</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bluetooth Headphones</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bangles & Bracelets</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bra</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Car Covers</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cups & Mugs</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Dresses</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Dupatta Sets</a></label><br/>
                          <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Dupattas</a></label><br/>
                          <h4><a href="#">Show More</a></h4>
                        </div>
                      </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow2(!isShow2)}><h3>Gender</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow2 && <div class="checkbox1">
                    <ul>
                      <li><a href="#">Boys</a></li>
                      <li><a href="#">Girls</a></li>
                      <li><a href="#">Men</a></li>
                      <li><a href="#">Women</a></li>
                    </ul>
                  </div>
                    }
                    <hr/>
                    <div className="category"onClick={()=>setIsShow3(!isShow3)}><h3>Fabric</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow3 && <div class="checkbox2">
                  <div id="checkbox2-top">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="text" id="search"name="search"placeholder='Search'/>
                  </div>
                  <div id="checkbox2-bottom">
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Acrylic</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Art Silk</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Banarasi Silk</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Chandari Cotton</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Chandari Silk</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Chiffon</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton Blend</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton Cambric</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton Linen</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton Lycra</a></label><br/>
                  <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton Silk</a></label><br/>
                  <h4><a href="#">Show More</a></h4>
                 </div>
                </div>

                    }
                    <hr/>
                    <div className="category"onClick={()=>setIsShow4(!isShow4)}><h3>Oxfords</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow4 && <div class="checkbox3">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Heels</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow5(!isShow5)}><h3>dail_shape</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow5 && <div class="checkbox4">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Round</a></label>
                    </div>
                    }
                    <hr/>
                    <div className="category"onClick={()=>setIsShow6(!isShow6)}><h3>Color</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow6 && <div class="checkbox5">
                    <ul>
                      <li><a href="#">Beige</a></li>
                      <li><a href="#">Beige</a></li>
                      <li><a href="#">Black</a></li>
                      <li><a href="#">Blue</a></li>
                      <li><a href="#">Brown</a></li>
                      <li><a href="#">Combo of Different Color</a></li>
                      <li><a href="#">Combo of Maroon Color</a></li>
                      <li><a href="#">Combo of Red Shade</a></li>
                      <li><a href="#">Coral</a></li>
                      <li><a href="#">Gold</a></li>
                      <li><a href="#">Grey</a></li>
                      <li><a href="#">Khaki</a></li>
                    </ul>
                    <h4><a href="#">Show More</a></h4>
                  </div>
                    }
                    <hr/>
                    <div className="category"onClick={()=>setIsShow7(!isShow7)}><h3>Smartcoins</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow7 && <div class="checkbox6">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Get Smartcoins</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow8(!isShow8)}><h3>Price</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow8 && <div class="checkbox7">
                    <ul>
                      <li><a href="#">Under &#8377; 149</a></li>
                      <li><a href="#">Under &#8377; 199</a></li>
                      <li><a href="#">Under &#8377; 249</a></li>
                      <li><a href="#">Under &#8377; 299</a></li>
                      <li><a href="#">Under &#8377; 349</a></li>
                      <li><a href="#">Under &#8377; 399</a></li>
                      <li><a href="#">Under &#8377; 449</a></li>
                      <li><a href="#">Under &#8377; 499</a></li>
                      <li><a href="#">Under &#8377; 499</a></li>
                      <li><a href="#">Under &#8377; 99</a></li>
                      <li><a href="#">&#8377; 0 -  &#8377; 99</a></li>
                      <li><a href="#">&#8377; 100 -  &#8377; 149</a></li>
                      <li><a href="#">&#8377; 150 -  &#8377; 199</a></li>
                    </ul>
                    <h4><a href="#">Show More</a></h4>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow9(!isShow9)}><h3>Meesho Mall</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow9 && <div class="checkbox8">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mall Brands</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow10(!isShow10)}><h3>Occassion</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow10 && <div class="checkbox9">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bridal</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Festival</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow11(!isShow11)}><h3>Combo of</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow11 && <div class="checkbox10">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Couples Set</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow12(!isShow12)}><h3>Kurta_fabric</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow12 && <div class="checkbox11">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Acrylic</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Polycotton</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow13(!isShow13)}><h3>Dupatta Color</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow13 && <div class="checkbox12 hide">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Purple</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow14(!isShow14)}><h3>Discount</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow14 && <div class="checkbox13 hide">
                  <ul>
                    <li><a href="#">10% And Above</a></li>
                    <li><a href="#">20% And Above</a></li>
                    <li><a href="#">30% And Above</a></li>
                    <li><a href="#">40% And Above</a></li>
                    <li><a href="#">50% And Above</a></li>
                    <li><a href="#">60% And Above</a></li>
                    <li><a href="#">70% And Above</a></li>
                    <li><a href="#">80% And Above</a></li>
                    <li><a href="#">90% And Above</a></li>
                    <li><a href="#">All Discounted</a></li>
                    <li><a href="#">Deals</a></li>
                  </ul>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow15(!isShow15)}><h3>Rating</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow15 && <div class="checkbox14">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.0 and above</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">3.0 and above</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">3.5 and above</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">4.0 and above</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">M-Trusted</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow16(!isShow16)}><h3>Size</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow16 && <div class="checkbox15">
                    <div id="checkbox15-top">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="search"name="search"placeholder='Search'/>
                    </div>
                    <div id="checkbox15-bottom">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">0-2 years</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#"> 1.5 Meters</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">1.75 Meters</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">10</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">10-16 years</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2 Meters</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.5 years</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.2 Meters</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.4</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.5 Meters</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.6</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">2.7 Meters</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                  </div>
                  </div>}
                    <hr/> 
                    <div className="category"onClick={()=>setIsShow17(!isShow17)}><h3>Combo</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow17 && <div class="checkbox16">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Combos</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Multipack</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 1</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 12</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 2</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 3</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 4</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 5</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 6</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 7</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 8</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pack of 9</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                    </div>}
                    <hr/> 
                    <div className="category"onClick={()=>setIsShow18(!isShow18)}><h3>operating_voltage</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow18 && <div class="checkbox17">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">100 Volts</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow19(!isShow19)}><h3>power_consumption</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow19 && <div class="checkbox18">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">100 Watts</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow20(!isShow20)}><h3>Reversible</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow20 && <div class="checkbox19">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">No</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow21(!isShow21)}><h3>used_for</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow21 && <div class="checkbox20">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Carpet Sofa</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow22(!isShow22)}><h3>body_material</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow22 && <div class="checkbox21">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Abs Plastic</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Stainless Steel</a></label>
                   </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow23(!isShow23)}><h3>Material</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow23 && <div class="checkbox22">
                      <div id="checkbox22-top">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <input type="text" id="search"name="search"placeholder='Search'/>
                      </div>
                      <div id="checkbox22-bottom">
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Acrylin</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Alloy</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aluminium</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Arcylic</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Artificial Flowers</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Beads</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Brass</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Canvas</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Canvas & leather</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Ceramic</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Clay</a></label><br/>
                      <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton</a></label><br/>
                      <h4><a href="#">Show More</a></h4>
                    </div>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow24(!isShow24)}><h3>Bottom Length</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow24 && <div class="checkbox23">
                    <ul>
                      <li><a href="#">2 mtrs</a></li>
                      <li><a href="#">2.1 mtrs</a></li>
                      <li><a href="#">2.2 mtrs</a></li>
                      <li><a href="#">2.25 mtrs</a></li>
                      <li><a href="#">2.3 mtrs</a></li>
                      <li><a href="#">2.4 mtrs</a></li>
                      <li><a href="#">2.5 mtrs</a></li>
                      <li><a href="#">2.6 mtrs</a></li>
                      <li><a href="#">2.7 mtrs</a></li>
                      <li><a href="#">2.8 meters</a></li>
                      <li><a href="#">2.8 mtrs</a></li>
                      <li><a href="#">2.8 meters</a></li>
                    </ul>
                    <h4><a href="#">Show More</a></h4>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow25(!isShow25)}><h3>Print or Pattern Type</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow25 && <div class="checkbox24">
                    <div id="checkbox24-top">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="search"name="search"placeholder='Search'/>
                    </div>
                    <div id="checkbox24-bottom">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Abstract</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Abstract</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Abstract</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bandhani</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bandhani</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Batik</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Block</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Botanical</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Botanical</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Checked</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Colorblock</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                  </div>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow26(!isShow26)}><h3>Bottom Style</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow26 && <div class="checkbox25">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Anarkali</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Banarasi</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Flared</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Gathered</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Gujarati</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Indo Western</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Panelled</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Layered</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Rajputani</a></label>
                   </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow27(!isShow27)}><h3>Bottomwear Fabric</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow27 && <div class="checkbox26">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Art Silk</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Georgette</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Net</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">No Bottomwear</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Satin</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Silk</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Taffeta Silk</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Velvet</a></label><br/>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow28(!isShow28)}><h3>Ornamentation</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow28 && <div class="checkbox27">
                    <div id="checkbox27-top">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="search"name="search"placeholder='Search'/>
                    </div>
                    <div id="checkbox27-bottom">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aari Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aari Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aari Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aari Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Beads & Stones</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Brocade</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Brocade</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Brocade</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                  </div>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow29(!isShow29)}><h3>Bottom Pattern Type</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow29 && <div class="checkbox28">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Checked</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embellished</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embroidered</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Ethnic Motif</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Floral</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Jacquard</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Printed</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Ruffle</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Solid</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Woven Design</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow30(!isShow30)}><h3>Border</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow30 && <div class="checkbox29">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Border</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embellished</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embroidered</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Fringed</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Lace</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">No Border</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Pom-Pom/Bobble</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Printed</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Solid</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Tassels & Latkans</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Zari</a></label>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow31(!isShow31)}><h3>Surface Styling</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow31 && <div class="checkbox30">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aari Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Beads & Stones</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bow</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Car Body</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cut Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cut-out</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cutout</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cutwork</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embellished</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Fringed</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow32(!isShow32)}><h3>Back Type</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow32 && <div class="checkbox31">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Backlers</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Collar</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Deep Scoop</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Loop</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mid Scoop</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Paan</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Round Neck</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Square Neck</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Stylished</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">V neck</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow33(!isShow33)}><h3>Top Pattern</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow33 && <div class="checkbox32">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Checked</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Colorblocked</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Dyed/Washed</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embellished</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embroidered</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Lace</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Printed</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Self-Design</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Solid</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Striped</a></label>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow34(!isShow34)}><h3>Fit/ Shape</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow34 && <div class="checkbox33">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Aari Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Applique</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Beads & Stones</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Bow</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Car Body</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cut Work</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cut-out</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cutout</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cutwork</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Embellished</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Fringed</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow35(!isShow35)}><h3>Inner Fabric</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow35 && <div class="checkbox34">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cancan</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Cotton</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Polyester</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Satin</a></label><br/>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow36(!isShow36)}><h3>Loom Type</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow36 && <div class="checkbox35">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Powerloom</a></label><br/>
                    </div>}
                    <hr/> 
                    <div className="category"onClick={()=>setIsShow37(!isShow37)}><h3>Top Type</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow37 && <div class="checkbox36">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Crop Top</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Jacket</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Regular Top</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Regular Top</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Shirt</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Sweaters</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Sweat Shirts</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">T-shirt</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Tunic</a></label><br/>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow38(!isShow38)}><h3>Brand</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow38 && <div class="checkbox37">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Apple iphone</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Huawei</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mama earth</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Nokia</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Nutriley</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Oneplus</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Oppo</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Realme</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Redmi</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Rosedale</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Vivo</a></label><br/>
                    </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow39(!isShow39)}><h3>Compatible Models</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow39 && <div class="checkbox38">
                    <div id="checkbox38-top">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="search"name="search"placeholder='Search'/>
                    </div>
                    <div id="checkbox38-bottom">
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi 9</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi 9</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi 9 Prime</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi 9A</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi 9A</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi Note 8</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi Note 8 Pro</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">Mi Redmi Note 9 Pro</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">OPPO A15</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">OPPO A15</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">OPPO A31</a></label><br/>
                    <input type="checkbox" name="checkbox-list" id="checkbox-list"/><label><a href="#">OPPO A3s</a></label><br/>
                    <h4><a href="#">Show More</a></h4>
                    </div>
                  </div>}
                    <hr/>
                    <div className="category"onClick={()=>setIsShow40(!isShow40)}><h3>Warranty Period</h3><i class="fa-solid fa-angle-down"></i></div>
                    {isShow40 && <div class="checkbox39">
                    <ul>
                      <li><a href="#">1 Month</a></li>
                      <li><a href="#">1 Year</a></li>
                      <li><a href="#">2 Months</a></li>
                      <li><a href="#">3 Months</a></li>
                      <li><a href="#">6 Months</a></li>
                    </ul>
                  </div>}

                </div>
              </div>
            </div>
        </div>
    )
}

export default Products
