import React,{useState} from 'react'
import './SlipperAdd.css'
import NavBar from '../../../../Components/NavBar/NavBar'
import Footer from '../../../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SlipperAdd() {
  const [category,setCategory] = useState("");
  const [price,setPrice] = useState("");
  const [size,setSize] = useState("");
  const navigate = useNavigate();

  const hanldesubmit = (e) => {
    e.preventDefault();
    console.log({category,price,size});

    axios.post('http://localhost:5000/slippers',{category,price,size})
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
      <div className="product-add-content">
        <h1>Slippers Add Page</h1>
        <div className="product-add-form">
          <form className="form-content" onSubmit={hanldesubmit}>
            <input type="file" accept="image/*"></input>
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
              type="text"
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
