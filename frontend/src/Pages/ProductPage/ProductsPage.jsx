import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from "../../Components/NavBar/NavBar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import "./ProductsPage.css"
function ProductsPage() {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/getteddy')
        .then((products)=>setProducts(products.data))
        .catch((err)=>console.log(err));
    },[]);


 
  return (
    <div className='productsPage'>
        <NavBar/>
        <div className='pagecontent'>
            <h1>Products</h1>
        <div className='teddybares'>
            <h3>Teddy Bares</h3>
          
        <div className='teddybares-carts'>
            
        <div className='Brownteddy-cart'>
           
            </div>
            <div className='Pinkteddy-cart'>
            
        </div>
        <div className='blueteddy-cart'>
            
        </div>
        <div className='blackteddy-cart'>
            
        </div>
        </div>
        </div>
        <div className='flowerWass'>
            <h3>Flower Vass</h3>
        <div className='flowervass-carts'>
        <div className='flowervass1-cart'>
            
            </div>
            <div className='flowervass2-cart'>
            
        </div>
        <div className='flowervass3-cart'>
            
        </div>
        <div className='flowervass4-cart'>
            
        </div>
        </div>
        </div>
        <div className='watches'>
            <h3>Watches </h3>
        <div className='watches-carts'>
        <div className='watches1-cart'>
            
            </div>
            <div className='watches2-cart'>
            
        </div>
        <div className='watches3-cart'>
            
        </div>
        <div className='watches4-cart'>
            
        </div>
        </div>
        </div>
        <div className='Slippers'>
            <h3>Slippers</h3>
        <div className='Slippers-carts'>
        <div className='Slippers1-cart'>
            
            </div>
            <div className='Slippers2-cart'>
            
        </div>
        <div className='Slippers3-cart'>
            
        </div>
        <div className='Slippers4-cart'>
            
        </div>
        </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}


export default ProductsPage
