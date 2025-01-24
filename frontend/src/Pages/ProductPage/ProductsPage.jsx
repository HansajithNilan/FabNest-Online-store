import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import "./ProductsPage.css";

function ProductsPage() {

  const {id} = useParams();
 
  const [teddies, setTeddy] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [slippers, setSlippers] = useState([]);

  const [name,setName] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:5000/teddy")
      .then((products) => setTeddy(products.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/flowers")
      .then((products) => setFlowers(products.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/slippers")
      .then((products) => setSlippers(products.data))
      .catch((err) => console.log(err));
  }, []);


useEffect(()=>{

axios.get(`http://localhost:5000/user/${id}`)
.then((result)=>setName(result.data.name))
.catch((err)=>console.log(err))
})
 

  return (
    <div className="productsPage">
      <NavBar name={name} />
      <div className="pagecontent">
        <h1>Products</h1>

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
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
