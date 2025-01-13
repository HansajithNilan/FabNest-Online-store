import React from 'react'
import './SingleProduct.css'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

function SingleProduct() {
  return (
    <div className='SingleProduct-wrapper'>
        <NavBar/>
        <div className='SingleProduct-contain'>
         <div className='image-details'>
            <div className='SingleProduct-image'>
               <img src='../Images/AboutUsPage.jpg'/>
               <div className='SingleProduct-like'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
               
               </div>
            </div>
            <div className='SingleProduct-details'>
              <h1>name</h1><br/><br/>
              <h2>color</h2><br/>
              <h3>price</h3><br/><br/><br/><br/><br/><br/>
              <p className='free'>FREE</p>
              <p className='delevery'>DELIVERY</p><br/>
              <button>Order Now</button>
            </div>
         </div>
         <div className='SingleProduct-description'>
          <p>"Adorable brown teddy bear plush with a soft, huggable design! Featuring a cute round face, big black eyes, and paw details on its feet, this teddy is perfect for cuddles or as a delightful gift for all ages. Size: Medium. Material: Premium-quality plush fabric. Bring home this lovable companion today!"</p>

         </div>
        </div>
      <Footer/>
    </div>
  )
}

export default SingleProduct
