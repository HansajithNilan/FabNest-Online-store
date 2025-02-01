import React,{useState} from 'react'
import './SlipperAdd.css'
import NavBar from '../../../../Components/NavBar/NavBar'
import Footer from '../../../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddProduct from "../../AddProduct/AddProduct";
import SideBar from "../../sideBar/SideBar";

function SlipperAdd() {
  const [category,setCategory] = useState("");
  const [price,setPrice] = useState();
  const [size,setSize] = useState("");
  const [image,setImage] = useState("");
  const navigate = useNavigate();

  const hanldesubmit = (e) => {
    e.preventDefault();
    console.log({category,price,size,image});

    axios.post('http://localhost:5000/slippers',{category,price,size,image})
    .then((result) => {
      console.log("Slipper add succefull",result.data);
      alert(`${category} Add Successfull`);

      navigate('/products')
    })
    .catch((err) => {
      console.error('Slipper add fail',err);
      alert('Slipper Add Fail. Please tru again.')
    });

  };

  return (
    <div>
      <div className="product-add-page">
      <NavBar />
      <SideBar/>
      <div className="product-add-content">
        <AddProduct/>
        <h1>Slippers Add Page</h1>
        <div className="product-add-form">
          <form className="form-content" onSubmit={hanldesubmit}>
          <label> Product Image :</label>
            <br />
            <input type="test"
             value={image}
             onChange={(e) => setImage(e.target.value)}
             placeholder='Enter the URL for a image'
             ></input>
            <br />
            <label>Product Category :</label>
            <br />
            <input
              type="text"
              placeholder="Enter product category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            <label>Product Size :</label>
            <br />
            <input
              type="text"
              placeholder="Enter product size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
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

export default SlipperAdd
