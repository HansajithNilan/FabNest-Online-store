import React, { useState } from "react";
import "./LoginPage.css";

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate(); // Use the hook correctly here

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    console.log({ email, password });

    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        setUser(result.data);

        console.log(result);

        if (result.data.user.role === "user") {
          navigate(`/products/${result.data.user.id}`); // Navigate to home for users
        } else if (
          result.data.user.role === "admin" &&
          result.data.user.email === "admin@gmail.com"
        ) {
          navigate(`/AdminDashboard/${result.data.user.id}`); // Navigate to admin dashboard
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
                className="email"
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
              <h3><a href="#">Forgot your password?</a></h3>
              <button type="submit">Sign In</button>
              <br />
            </form>
          </div>
          <div className="newtotag">
            <h1>
              Don't have an account? <a href="/UserRegister"> Sign up</a>
            </h1>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
