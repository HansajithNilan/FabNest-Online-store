import React, { useState } from "react";
import axios from "axios";

import "./AddProducts.css";

import NavBar from "../../../../Components/NavBar/NavBar";
import Footer from "../../../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [color, setColor] = useState("");

  const navigate = useNavigate();

  const hanldesubmit = (e) => {
    e.preventDefault();

    console.log({ name, price, color,image });

    axios.post('http://localhost:5000/teddy',{name,price,color,image})
    .then((result)=>{
      console.log(" Teddy Bare Add SuccessFull ",result.data);
      alert(`${name}  Bare add successfull`);

      navigate('/products')
    })
    .catch((err) => {
      console.error('Teddy Bare Add Fail', err);
      alert('Teddy Bare Add Fail. Please try again.');
    });
  };
  return (
    <div className="product-add-page">
      <NavBar />
      <div className="product-add-content">
        <h1>TeddyBares Add Page</h1>
        <div className="product-add-form">
          <form className="form-content" onSubmit={hanldesubmit}>
          <label> Product Image :</label>
            <br />
            <input type="text" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter the URL for a image"
            ></input>
            <br />
            <label>Product Name :</label>
            <br />
            <input
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label>Product Price :</label>
            <br />
            <input
              type="Number"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <br />
            <label>Product color :</label>
            <br />
            <input
              type="text"
              placeholder="Enter product color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></input>
            <br />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddProducts;
