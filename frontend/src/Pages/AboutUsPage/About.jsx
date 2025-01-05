import React from 'react'
import './About.css'
import NavBar from '../../Components/NavBar/NavBar'

function About() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <div className='content'>
         <h1>About Us</h1>
         <div className='parent'>
            <div className='image'>
               <img src='../Images/AboutUsPage.jpg'/>
            </div>
            <div className='list'>
                 <ul>
                    <li>
                       Welcome to FabNest, your one-stop online destination for delightful gifts, everyday essentials, and trendy accessories. At FabNest, we believe in making shopping easy, enjoyable, and accessible for everyone.
                    </li><br/>
                    <li>
                       We offer a wide range of products, including adorable teddy bears, elegant flower vases, comfortable slippers, stylish watches, and much more. Whether you're looking for the perfect gift, a touch of decor for your home, or practical items for daily use, FabNest has got you covered.
                    </li><br/>
                    <li>
                       Our mission is to bring joy to your shopping experience by providing high-quality products at competitive prices, delivered right to your doorstep. With a focus on customer satisfaction, we ensure a seamless and secure online shopping journey.
                    </li><br/>
                    <li>
                       Discover, shop, and fall in love with our curated collection of unique items. At FabNest, we’re here to help you find exactly what you need and more.
                    </li><br/>
                    <li>
                    Thank you for choosing FabNest — where convenience meets style!
                    </li>
                 </ul>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
