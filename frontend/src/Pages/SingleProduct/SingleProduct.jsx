import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity is 1

  useEffect(() => {
    axios
      .get(`http://localhost:5000/teddy/${id}`)
      .then((product) => {
        setName(product.data.name);
        setBasePrice(product.data.price); // Store the base price
        setPrice(product.data.price);
        setColor(product.data.color);
        setImage(product.data.image);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/flowers/${id}`)
      .then((product) => {
        setName(product.data.name);
        setBasePrice(product.data.price);
        setPrice(product.data.price);
        setColor(product.data.color);
        setImage(product.data.image);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/slippers/${id}`)
      .then((product) => {
        setName(product.data.category);
        setBasePrice(product.data.price);
        setPrice(product.data.price);
        setColor(product.data.size);
        setImage(product.data.image);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Handle quantity change
  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    setSelectedQuantity(quantity);
    setPrice(basePrice * quantity); // Update price dynamically
  };

  return (
    <div className="SingleProduct-wrapper">
      <NavBar />
      <div className="SingleProduct-contain">
        <div className="image-details">
          <div className="SingleProduct-image">
            <img src={image} alt={name} />
          </div>
          <div className="SingleProduct-details">
            <h1>{name}</h1>
            <br />
            <br />
            <h2>Color: {color}</h2>
            <br />
            <h3>${price.toFixed(2)}</h3>{" "}
            {/* Format price to two decimal places */}
            <br />
            <br />
            <label className="label">Quantity: </label>
            <select
              className="quantity"
              value={selectedQuantity}
              onChange={handleQuantityChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <br />
            <p className="free">FREE</p>
            <p className="delevery">DELIVERY</p>
            <br />
            <button className="buynow">Buy Now</button>
          </div>
        </div>
        <div className="SingleProduct-description">
          <p>
            "Adorable brown teddy bear plush with a soft, huggable design!
            Featuring a cute round face, big black eyes, and paw details on its
            feet, this teddy is perfect for cuddles or as a delightful gift for
            all ages. Size: Medium. Material: Premium-quality plush fabric.
            Bring home this lovable companion today!"
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
