import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from "../../Components/NavBar/NavBar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import "./ProductsPage.css"
function ProductsPage() {

    const [products,setProducts] = useState([]);
    const [teddies,setTeddy] = useState([]);
    const [flowers,setFlowers] = useState([]);
    const [slippers,setSlippers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/getteddy')
        .then((products)=>setTeddy(products.data))
        .catch((err)=>console.log(err));
    },[]);

    useEffect(()=>{
        axios.get('http://localhost:5000/getflowers')
        .then((products)=>setFlowers(products.data))
        .catch((err)=>console.log(err));
    },[]);

    useEffect(()=>{
        axios.get('http://localhost:5000/getslippers')
        .then((products)=>setSlippers(products.data))
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
            {teddies.map((teddy)=>{
                return(
                <div className='teddy'>
                    <div className='teddy-img'>
                    image
                    </div>
                    <div className='tedy-text'>
                    <p>Name : {teddy.name} </p>
                    <p>Color: {teddy.color}</p>
                    </div>
                    <div className='tedy-buy'>
                    <p>{teddy.price}</p>
                    <button>Buy Now</button>
                    </div>
                </div>
                );
            })}
        </div>
        </div>

        <div className='flowerWass'>
            <h3>Flower Vass</h3>
        <div className='flowervass-carts'>
        
        {flowers.map((flower)=>{
                return(
                <div className='flowers'>
                    <div className='flower-img'>
                    image
                    </div>
                    <div className='flower-text'>
                    <p>Name : {flower.name} </p>
                    <p>Color: {flower.color}</p>
                    </div>
                    <div className='flower-buy'>
                    <p>{flower.price}</p>
                    <button>Buy Now</button>
                    </div>
                </div>
                );
            })}
        </div>
        </div>
        
        <div className='Slippers'>
            <h3>Slippers</h3>
        <div className='Slippers-carts'>
        {slippers.map((slipper)=>{
                return(
                <div className='slipper'>
                    <div className='slipper-img'>
                    image
                    </div>
                    <div className='slipper-text'>
                    <p>Category : {slipper.category} </p>
                    <p>Size: {slipper.size}</p>
                    </div>
                    <div className='slipper-buy'>
                    <p>{slipper.price}</p>
                    <button>Buy Now</button>
                    </div>
                </div>
                );
            })}
        </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}


export default ProductsPage
