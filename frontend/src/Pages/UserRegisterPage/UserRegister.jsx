import React from 'react'
import './UserRegister.css'
import NavBar from '../../Components/NavBar/NavBar'

function UserRegister() {
  return (
    <div className='wrapper'>
    
    <NavBar/>
    <div className='Rpage'>
    <div className='RegBox'>
            
                <h1>Create an acount</h1>
                <p>Already have an account? <a href='#'> Log in </a> </p>
                <form>
                    <label>What should we call you?</label><br/>
                    <input type='text' placeholder='Enter your profile name'></input>
                    <label>What's your email?</label><br/>
                    <input type='text' placeholder='Enter your email address'></input>
                    <label>Create a password</label><br/>
                    <input type='password' placeholder='Enter your password'></input>
                    <p>Use 8 or more characters with a mix of letters, numbers & symbols</p><br/>
                    <p>By creating an account, you agree to the<a href='#' >Terms of use</a> and <a href='#'>Privacy Policy.</a> </p>
                  
                </form>
                <button>Create an account</button><br/> 
            </div>
           
          
    </div>
    </div>
  )
}

export default UserRegister
