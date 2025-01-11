import React, { useState } from "react";
import "./LoginPage.css";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //Use the hook correctly here

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({email,password});

    axios

      .post("http://localhost:5000/login", { email, password })

      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          alert("Login successful!");
          navigate('/'); // Use the navigate function here
        }
      })
      .catch((err) => {
        console.error("Error logging in user:", err);
        alert("Login failed. Please check your credentials and try again.");
      });
  };

  return (
    <div className="wrapper">
      <NavBar />
      <div className="page">
        <div className="box">
          <div className="center-box">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />

              <label>Password:</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <br />

              <button type="submit">Sign In</button>
              <br />
            </form>

            <h2>
              <input type="checkbox" />
              By creating, you agree to the Terms of Use and Privacy Policy
            </h2>

            <h3>Forgot your password?</h3>
          </div>
          <div className="newtotag">
            <h1>
              --------------------- New to our community ---------------------
            </h1>
          <a href="/UserRegister">
            <button>Create an Account</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
