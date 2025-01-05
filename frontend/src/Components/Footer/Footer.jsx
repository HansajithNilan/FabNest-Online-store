import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="logofooter">
        <h1>FabNest</h1>
      </div>
      <div className="supportline">
        <h1>Support</h1>
    <ul>
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>Downloads</li>
        <li>Email</li>
    </ul>
      </div>
      <div className="followusline">
      <h1>Follow Us</h1>
    <ul>
        <li>Facbook</li>
        <li>Instergram</li>
        <li>Twitter</li>
        <li>Linkden</li>
    </ul>
      </div>
      <div className="contact">
        <h1>Contact Info</h1>
        <h3>071-3275308</h3>
        <h3>FabNest001@gmail.com</h3>
        <h3>wallawaya road,pillewela,Buttala</h3>
    </div>
    </div>
  );
}

export default Footer;
