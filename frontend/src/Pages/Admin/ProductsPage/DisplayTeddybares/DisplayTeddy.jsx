import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayProduct from '../../DisplayProduct/DisplayProduct'
import NavBar from '../../../../Components/NavBar/NavBar'
import Footer from '../../../../Components/Footer/Footer'
import './DisplayTeddy.css'
import SideBar from '../../sideBar/SideBar'
function DisplayTeddy() {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/teddy')
        .then((products)=>setProducts(products.data))
        .catch((err)=>console.log((err)));

    },[])

    const handleDelete = (id) =>{
      axios.delete('http://localhost:5000/teddy/' + id)
      .then(res=>{
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
    }
  return (
    <div className="user-profile-wrapper">
      <NavBar/>
      <SideBar/>
    <div className="user-profile-container">
      <DisplayProduct/>
        <h1>Teddy Bares Collecion</h1>
      <table className="user-table">
        <thead className="user-table-header">
          <tr>
          <th className="user-table-header-cell">Image</th>
            <th className="user-table-header-cell">Name</th>
            <th className="user-table-header-cell">Price</th>
            <th className="user-table-header-cell">Color</th>
            <th className="user-table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="user-table-body">
          {products.map((product) => {
            return (
              <tr className="user-table-row" key={product._id}>
                <td className="user-table-cell"><img src={product.image} alt={product.name} style={{ width: "60px", height: "60px", borderRadius: "8px" }}/></td>
                <td className="user-table-cell">{product.name}</td>
                <td className="user-table-cell">{product.price}$</td>
                <td className="user-table-cell">{product.color}</td>
                <td className="user-table-cell">
                  <a href className="user-update-link">
                 <a href={`/updateteddybares/${product._id}`} > <button className="user-update-button">Update</button></a>
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

export default DisplayTeddy
