import React, { useEffect, useState } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserChart from "../UseChart/UserChart.jsx";
import './admindashboard.css';
import SideBar from "../sideBar/SideBar.jsx";

function admindashboard() {
  const { id} = useParams();

 
  const [name, setName] = useState("");

  const [flowerCount, setFlowerCount] = useState(0);
  const [teddyCount, setTeddyCount] = useState(0);
  const [slippersCount, setSlippersCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/flowers")
      .then((res) => setFlowerCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/teddy")
      .then((res) => setTeddyCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/slippers")
      .then((res) => setSlippersCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => setUserCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);
  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((user) => {
       
        setName(user.data.name);
      })
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <div className="count-wrapper">
    <NavBar />
    <SideBar/>
    <div className="count-container">

      <h1>Admin Dashboard</h1>
      <div className="cards">
        <div className="stats-card" style={{ backgroundColor: "#cdccff" }}>
          <h3>👤 Users</h3>
          <p>{userCount}</p>
        </div>

        <div className="stats-card" style={{ backgroundColor: "#ffcccc" }}>
          <h3>🌸 Flowers</h3>
          <p>{flowerCount}</p>
        </div>

        <div className="stats-card" style={{ backgroundColor: "#ccffd3" }}>
          <h3>🥿 Slippers</h3>
          <p>{slippersCount}</p>
        </div>

        <div className="stats-card" style={{ backgroundColor: "#e6812278" }}>
          <h3>🧸 Teddies</h3>
          <p>{teddyCount}</p>
        </div>
      </div>

      <div>
        <UserChart/>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default admindashboard;
