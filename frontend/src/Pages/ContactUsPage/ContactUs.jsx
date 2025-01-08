import React from 'react'
import './ContactUs.css'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'


function ContactUs() {
  return (
    
         
    <div className='contact-us-wrapper'>
        <NavBar/>
      <div className='contact-us-content'> 
      
        <div className='pic'>
          
           <div className='text'>
            <h1>Get in touch</h1><br/>
            <p>Want to get in touch? We'd love to hear from you. Here's how you reach us..</p>
           </div>
        </div>
        <div className='card'>
           <div className='talk'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <h1>Talk to Sales</h1>
            <p>Interested in Fabnest's software? Just pick up the  phone to chat with a member of our sales team.</p>
            <h2>+47 123 5643</h2>
           </div>
           <div className='support'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/></svg>
            <h1>Contact Customer Support</h1>
            <p>Sometimes you need a little help from you friends. Or a Fabnest support rep. Don't worry...we are help for you.</p>
            <button>Contact Support</button>
           </div>
        </div>
       
      </div>
      <Footer/>
    </div>
    
   
  )
}

export default ContactUs
