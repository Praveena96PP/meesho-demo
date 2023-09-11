import React, { useState } from 'react'
import '../Component/Catalogue.css'
import cat1 from '../Component/images/cat1.jpg'
import cat2 from '../Component/images/cat2.jpg'
import cat3 from '../Component/images/cat3.jpg'
import cat4 from '../Component/images/cat4.jpg'
import cat5 from '../Component/images/cat5.jpg'
import cat6 from '../Component/images/cat6.jpg'
import cat7 from '../Component/images/cat7.jpg'
import cat8 from '../Component/images/cat8.jpg'
import cat9 from '../Component/images/cat9.jpg'
import cat10 from '../Component/images/cat10.jpg'
import cat11 from '../Component/images/cat11.jpg'
import cat12 from '../Component/images/cat12.jpg'
import cat13 from '../Component/images/cat13.jpg'
import cat14 from '../Component/images/cat14.jpg'
import cat15 from '../Component/images/cat15.jpg'
function Catalogue() {
    const[cards]=useState([
        {img:cat1, title:"Bluetooth Headphones & Accessories", price:"259", delivery:"Delivery Rs.90",rating:"3.8",review:"82018"},
        {img:cat2, title:"Vishvambari Premium", price:"161", delivery:"Free Delivery",rating:"4.0",review:"6138"},
        {img:cat3, title:"VStylish Modern Women", price:"127", delivery:"Free Delivery",rating:"3.8",review:"239"},
        {img:cat4, title:"Saree & cloths storage boxes", price:"294", delivery:"Free Delivery",rating:"4.1",review:"556"},
        {img:cat5, title:"Fancy Latest women Dresses", price:"359", delivery:"Free Delivery",rating:"3.8",review:"406"},
        {img:cat6, title:"Elite Women Analog Watches", price:"400", delivery:"Delivery Rs.76",rating:"3.8",review:"67"},
        {img:cat7, title:"Eyebogler Men's T-shirts", price:"297", delivery:"Free Delivery",rating:"3.6",review:"6176167"},
        {img:cat8, title:"Modern Unique Trendy Kitchen items", price:"148", delivery:"Free Delivery",rating:"4.2",review:"42853"},
        {img:cat9, title:"Trendy Feminine Women Tops", price:"217", delivery:"Free Delivery",rating:"3.6",review:"17616"},
        {img:cat10, title:"Stylish Glamorous Men Shirt", price:"332", delivery:"Free Delivery",rating:"3.7",review:"11259"},
        {img:cat11, title:"Trendy Revising Men T-shirts", price:"189", delivery:"Free Delivery",rating:"3.8",review:"46145"},
        {img:cat12, title:"Flawsome Stylish Kids dress", price:"256", delivery:"Free Delivery",rating:"4.0",review:"2401"},
        {img:cat13, title:"36H SKTECH EYELINERS", price:"95", delivery:"Free Delivery",rating:"3.8",review:"3048"},
        {img:cat14, title:"Fancy Others Kitchen Tools", price:"117", delivery:"Free Delivery",rating:"4.1",review:"236"},
        {img:cat15, title:"Shimmering Fusion Jewellery", price:"203", delivery:"Free Delivery",rating:"4.1",review:"5381"},
    ])
    
    return (
        <div>
            <div id="catalogue">
                
                    {
                    cards.map((card, i)=>(
                        <div key={i} className='one-img'>
                            <a href="#"><img src={card.img}/></a>
                            <a herf="#"><h3>{card.title}</h3></a>
                            <a herf="#"><h4>&#8377;{card.price} <span>onwards</span></h4></a>
                            <a href="#"><button class="btn1">{card.delivery}</button></a>
                            <div className="div">
                            <a href="#"><button class="btn2">{card.rating}<i class="fa-solid fa-star"></i></button></a>
                            <a href='#'><h5>{card.review} Reviews</h5></a>
                            </div>
                        </div>
                    
                    ))
                    }
                
            </div>
        </div>
    );
}

export default Catalogue;
