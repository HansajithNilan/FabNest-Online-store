import React, { useState, useEffect } from 'react'
import './TopProduct.css'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import { Link } from "react-router-dom"

function TopProduct() {

  const [teddies, setTeddies] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [slippers, setSlippers] = useState([]);
  const [minPrice, setMinPrice] = useState(100); // Default filter for price > 100
  const [error, setError] = useState('');

  const API_URL1 = 'http://localhost:5000/teddies';
  const API_URL2 = 'http://localhost:5000/flower';
  const API_URL3 = 'http://localhost:5000/slipper'; // Replace with your backend URL

  const fetchFilteredTeddies = async (minPrice) => {
  try {
    const response = await axios.get(API_URL1, { params: { minPrice } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await fetchFilteredTeddies(minPrice);
      setTeddies(result);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  fetchData();
}, [minPrice]); // Re-fetch data whenever minPrice changes


const fetchFilteredFlowers = async (minPrice) => {
  try {
    const response = await axios.get(API_URL2, { params: { minPrice } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await fetchFilteredFlowers(minPrice);
      setFlowers(result);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  fetchData();
}, [minPrice]); // Re-fetch data whenever minPrice changes



const fetchFilteredSlippers = async (minPrice) => {
  try {
    const response = await axios.get(API_URL3, { params: { minPrice } });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await fetchFilteredSlippers(minPrice);
      setSlippers(result);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  fetchData();
}, [minPrice]); // Re-fetch data whenever minPrice changes


  return (
    <div className='productsPage'>
        <NavBar/>
        <div className='pagecontent'>
           <h1>Top Products</h1>
      <ul>
      <div className="teddybares">
          <h3>Teddy Bares</h3>
          <div className="product-contain">
            <div className="teddybares-carts">
              {teddies.map((teddy) => {
                return (
                  <Link to={`/singleproduct/${teddy._id}`}><div className="teddy">
                    <div className="teddy-img">
                      <img
                        src={teddy.image}
                        alt={teddy.name}
                        style={{
                          width: "200px",
                          height: "180px",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    <div className="tedy-text">
                      <p className="name">{teddy.name} </p>
                      <p className="color">{teddy.color} color</p>
                    </div>
                    <div className="tedy-buy">
                      <p className="price">${teddy.price}</p>
                      <button>Buy Now</button>
                    </div>
                  </div></Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flowerWass">
          <h3>Flower Vass</h3>
          <div className="product-contain">
            <div className="flowervass-carts">
              {flowers.map((flower) => {
                return (
                  <Link to={`/singleproduct/${flower._id}`}><div className="flowers">
                    <div className="flower-img">
                      <img
                        src={flower.image}
                        alt={flower.name}
                        style={{
                          width: "200px",
                          height: "180px",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    <div className="flower-text">
                      <p className="name">{flower.name} flower  bouquet </p>
                      <p className="color">{flower.color} color</p>
                    </div>
                    <div className="flower-buy">
                      <p className="price">${flower.price}</p>
                      <button>Buy Now</button>
                    </div>
                  </div></Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="Slippers">
          <h3>Slippers</h3>
          <div className="product-contain">
            <div className="Slippers-carts" >
              {slippers.map((slipper) => {
                return (
                   <Link to={`/singleproduct/${slipper._id}`}><div className="slipper">
                    <div className="slipper-img">
                      <img
                        src={slipper.image}
                        alt={slipper.name}
                        style={{
                          width: "200px",
                          height: "180px",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    <div className="slipper-text">
                      <p className="name">Category : {slipper.category} </p>
                      <p className="color">Size: {slipper.size}</p>
                    </div>
                    <div className="slipper-buy">
                      <p className="price">${slipper.price}</p>
                      <button>Buy Now</button>
                    </div>
                    </div></Link>
                );
              })}
            </div>
          </div>
        </div>
      </ul>
      </div>
        <Footer/>
    </div>
  )
}

export default TopProduct
