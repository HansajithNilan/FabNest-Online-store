import React from 'react'

import './NavBar.css'

function NavBar() {
  return (
    
    <div className='Navbar-container'>
        <div className='logo'>
            <div className='logo-img'>
            <img src='../Images/logo.png'></img>
            </div>
            <div className='log-text'>
            <h1>FabNest</h1>
            </div>
        </div>
        <div className='links'>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Top Products</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        </div>
        <div className='buttons'>
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
