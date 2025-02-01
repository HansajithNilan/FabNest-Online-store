import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../../Components/NavBar/NavBar";
import Footer from "../../../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import './FlowerAdd.css'
import AddProduct from "../../AddProduct/AddProduct";
import SideBar from "../../sideBar/SideBar";

function FlowerAdd() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [color, setColor] = useState("");
  const [image,setImage] = useState("");
  const navigate = useNavigate();

  const hanldesubmit = (e) => {
    e.preventDefault();

    console.log({ name, price, color,image });

    axios.post('http://localhost:5000/flowers',{name,price,color,image})
    .then((result)=>{
      console.log(" Flower Add SuccessFull ",result.data);
      alert(`${name} add successfull`);

      navigate('/products')
    })
    .catch((err) => {
      console.error('Flower Add Fail', err);
      alert('Flower Add Fail. Please try again.');
    });
  };
  return (
    <div>
      <div className="product-add-page">
      <NavBar />
      <SideBar/>
      <div className="product-add-content">
        <AddProduct/>
        <h1>Flowers Add Page</h1>
        <div className="product-add-form">
          <form className="form-content" onSubmit={hanldesubmit}>
          <label> Product Image :</label>
            <br />
            <input type="text"
             value={image}
             onChange={(e)=>setImage(e.target.value)}
             placeholder="Enter the URL for a Image"
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
    </div>
  )
}

export default FlowerAdd
