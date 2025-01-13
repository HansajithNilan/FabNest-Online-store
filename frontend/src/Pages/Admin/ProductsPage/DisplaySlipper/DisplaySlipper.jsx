import React,{useEffect,useState} from 'react'
import './DisplaySlipper.css'
import axios from 'axios';
import NavBar from '../../../../Components/NavBar/NavBar';
import Footer from '../../../../Components/Footer/Footer';

function DisplaySlipper() {

  const [product,setProduct]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/slippers')
    .then((products)=>setProduct(products.data))
    .catch((err)=>console.log(err));
  },[])

  const handleDelete = (id)=>{
    axios.delete('http://localhost:5000/slippers/'+id)
    .then(res =>{
      console.log(res);
      window.location.reload();
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <NavBar/>
    <div className="user-profile-container">
        <h1>Slippers Collecion</h1>
      <table className="user-table">
        <thead className="user-table-header">
          <tr>
            <th className="user-table-header-cell">Category</th>
            <th className="user-table-header-cell">Price</th>
            <th className="user-table-header-cell">Size</th>
            <th className="user-table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="user-table-body">
          {product.map((product) => {
            return (
              <tr className="user-table-row" key={product._id}>
                <td className="user-table-cell">{product.category}</td>
                <td className="user-table-cell">{product.price}</td>
                <td className="user-table-cell">{product.size}</td>
                <td className="user-table-cell">
                  <a href className="user-update-link">
                 <a href={`/updateslipper/${product._id}`} > <button className="user-update-button">Update</button></a>
                  </a>
                  <button
                    className="user-delete-button"
                    onClick={(e) => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  )
}

export default DisplaySlipper
