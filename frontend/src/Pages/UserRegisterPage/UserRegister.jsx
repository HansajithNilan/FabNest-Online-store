import React, { useState } from 'react';
import './UserRegister.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

function UserRegister() {
  const [name, setName] = useState(''); /////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ name, email, password });

    axios
      .post('http://localhost:5000/register', { name, email, password })
      .then((result) => {
        console.log(' User registration successful:', result.data);
        alert('User registration successful!');
      })
      .catch((err) => {
        console.error('Error registering user:', err);
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <div className="user-register-wrapper">
      <NavBar />
      <div className="Rpage">
        <div className="RegBox">
          <h1>Create an account</h1>
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
          <form onSubmit={handleSubmit}>
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
            <label>Enter password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            <p>
              By creating an account, you agree to the
              <a href="#"> Terms of use</a> and <a href="#">Privacy Policy.</a>
            </p>
            <button type="submit">Create an account</button> 
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserRegister;
