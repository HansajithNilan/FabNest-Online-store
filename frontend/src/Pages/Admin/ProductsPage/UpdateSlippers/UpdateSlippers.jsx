import React,{useEffect,useState} from 'react'
import './UpdateSlippers.css'
import axios from 'axios'
import NavBar from '../../../../Components/NavBar/NavBar'
import Footer from '../../../../Components/Footer/Footer'
import { useParams,useNavigate } from 'react-router-dom'

function UpdateSlippers() {

    const{id} = useParams()
    const[category,setCategory] = useState('');
    const[price,setPrice] = useState('');
    const[size,setSize] = useState('');

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/slippers/'+id)
        .then((product)=>{console.log(product)
                 setCategory(product.data.category)
                 setPrice(product.data.price)
                 setSize(product.data.size)
    })
        .catch((err) => console.log(err));
    },[])

  const UpdateButton = (e)=>{
    e.preventDefault()
    axios.put('http://localhost:5000/slippers/'+id,{category,price,size})
    .then((result)=>{
      console.log('Slipper update successfull',result.data)
      alert(`${category} Update successfull` );
      navigate('/displayslippers')
    })
    .catch((err) => {
      console.error('Error update slipper:', err);
      alert('update failed. Please try again.');
    });
  }

  return (
    <div className='product-add-page'>
      <NavBar/>
      <div className='product-add-content'>
         <h1>Update Slipper page</h1>
         <div className='product-add-form'>
           <form className='form-content' onSubmit={UpdateButton}>
           <input type="file" accept="image/*"></input>
          <br />
          <label>Product Category :</label>
          <br />
          <input
            type="text"
            placeholder="Enter product category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
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
          <label>Product size :</label>
          <br />
          <input
            type="text"
            placeholder="Enter product size"
            value={size}
            onChange={(e)=>Setsize(e.target.value)}
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

export default UpdateSlippers
