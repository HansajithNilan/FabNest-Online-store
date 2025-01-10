import React from 'react'
import './LoginPage.css'

import NavBar from '../../Components/NavBar/NavBar'
import Footer from "../../Components/Footer/Footer"

function LoginPage() {
  return (
    
   
        
    <div className='wrapper'>
    <NavBar/>
    <div className='page'>
    <div className='box '>
            <div className='center-box' >
                <h1>Sign in</h1>
                <form>
                    <label>Email or Mobile Number</label><br/>
                    <input type='text'></input>
                    <label>Your Password</label><br/>
                    <input type='text'></input>
                  

                </form>
                <button>Sign Up</button><br/>
               
                <h2> <input type='checkbox'></input>By creating,you agree to the Terms of use and Privacy Policy</h2>
                <h3>Forget your password</h3>
            </div>
            <div  className='newtotag'>
              <h1>--------------------- New to our community --------------------- </h1>
              <button>Create an account </button>
            </div>
          
            </div>
          
    </div>
<Footer/>
    </div>
    
  )
}

export default LoginPage
