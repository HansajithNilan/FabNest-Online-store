import React,{useEffect,useState} from 'react'
import './UpdateFlowers.css'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../../../../Components/NavBar/NavBar'
import Footer from '../../../../Components/Footer/Footer'

function UpdateFlowers() {
    const{id} = useParams()
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[color,setColor] = useState('');

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/flowers/'+id)
        .then((product)=>{console.log(product)
                 setName(product.data.name)
                 setPrice(product.data.price)
                 setColor(product.data.color)
    })
        .catch((err) => console.log(err));
    },[])

    const UpdateButton = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:5000/flowers/'+id,{name,price,color})
        .then((result)=>{
            console.log('Flower Update successfull',result.data)
            alert(`${name} Update successfull!`);
            navigate('/displayflowrs')
        })
        .catch((err) => {
            console.error('Error update Flower:', err);
            alert('update failed. Please try again.');
          });
    }

  return (
    <div className='product-add-page'>
      <NavBar/>
      <div className='product-add-content'>
         <h1>Update Fowers page</h1>
         <div className='product-add-form'>
           <form className='form-content' onSubmit={UpdateButton}>
           <input type="file" accept="image/*"></input>
          <br />
          <label>Product Name :</label>
          <br />
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          ></input>
          <br />
          <label>Product Price :</label>
          <br />
          <input
            type="text"
            placeholder="Enter product price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
           
          ></input>
          <br />
          <label>Product color :</label>
          <br />
          <input
            type="text"
            placeholder="Enter product color"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
          ></input>
          <br />
          <button type="submit">Upload</button>
           </form>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default UpdateFlowers
