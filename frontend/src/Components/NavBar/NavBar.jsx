import React, { useEffect } from 'react'

import './NavBar.css'
import { LogInFunction } from '../../../../backend/jwt/LogIn'


function NavBar({name}) {




  return (
    
    <div className='Navbar-container'>
        <div className='logo'>
            <div className='logo-img'>
            <a href='/'><img src='../Images/logo.png'></img></a>
            </div>
            <div className='log-text'>
            <h1>FabNest</h1>
            </div>
        </div>
        <div className='links'>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/products'>Products</a></li>
            <li><a href='topproduct'>Top Products</a></li>
            <li><a href='/About'>About Us</a></li>
            <li><a href='/contactus'>Contact</a></li>
            
        </ul>
        </div>
      




  <div className='buttons'>
    <h3> {name}</h3>
  <div className='Login-button'>
      <a href='/Login'>
      <button>Login</button>
      </a>
  </div>
  <div className='Register-button'>
     <a href='/UserRegister'>
      <button >Register</button>
      </a>
  </div>
  
</div>



      

        
     
    </div>
  )
}

export default NavBar
