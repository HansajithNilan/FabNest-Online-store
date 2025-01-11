import React ,{useState,useEffect}from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

import './UpdateUsers.css'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

function UpdateUsers() {

    const{id} =useParams()

    const [name, setName] = useState(''); /////
    const [email, setEmail] = useState('');
   
   
const navigate =useNavigate()
    
  useEffect(() => {
    axios
      .get("http://localhost:5000/getUsers/"+id)
      .then((users) => {console.log(users)
        setName(users.data.name)
        setEmail(users.data.email)
        
      })
      .catch((err) => console.log(err));

  }, []);


  const UpdateButton =(e)=>{
    e.preventDefault()
    axios
      .put('http://localhost:5000/updateuser/'+id, { name, email })
      .then((result) => {
        console.log(' User Update successful:', result.data);
        alert('User Update successful!');
        navigate('/userprofile')

      })
      .catch((err) => {
        console.error('Error update user:', err);
        alert('update failed. Please try again.');
      });

  }
  return (
    <div className="user-register-wrapper">
      <NavBar />
      <div className="Rpage">
        <div className="RegBox">
          <h1>Create an account</h1>
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
          <form onSubmit={UpdateButton} >
            <label>What should we call you?</label>
            <br />
            <input
              type="text"
              placeholder="Enter your profile name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Enter your email address:</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <p>
              By creating an account, you agree to the
              <a href="#"> Terms of use</a> and <a href="#">Privacy Policy.</a>
            </p>
           <a href='/userprofile'> <button type="submit">Update an account</button> </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UpdateUsers
