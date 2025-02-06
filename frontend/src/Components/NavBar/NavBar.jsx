import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './NavBar.css'
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext.jsx";

function NavBar() {


const { user, logout } = useContext(AuthContext);


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
    {!user ?(
        <Link to="/login" className='Login-button' ><button className='Login-button'>Login</button></Link>
 
    ):(
      <Link to="/" className='Login-button' ><button className='Login-button' onClick={logout}>Logout</button></Link>
    )}


  
</div>



      

        
     
    </div>
  )
}

export default NavBar
