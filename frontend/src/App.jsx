import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'


import Footer from "./Components/Footer/Footer.jsx"
import ProductsPage from './Pages/ProductPage/ProductsPage.jsx'


import About from './Pages/AboutUsPage/About.jsx'
import UserRegister from './Pages/UserRegisterPage/UserRegister.jsx'
import Forgotpswd from './Pages/Forgotpswd/Forgotpswd.jsx'
import ContactUs from './Pages/ContactUsPage/ContactUs.jsx'
import Users from './Pages/UserProfile/UserProfile.jsx'
import UserUpdates from './Pages/UpdateUsers/UpdateUsers.jsx'
import SingleProduct from './Pages/SingleProduct/SingleProduct.jsx'
import TopProduct from './Pages/TopProduct/TopProduct.jsx'


//Admin Pages

//Teddy Bares Part
import AddTeddybares from './Pages/Admin/ProductsPage/TeddyAddPage/AddProducts.jsx'
import DisplayTeddy from './Pages/Admin/ProductsPage/DisplayTeddybares/DisplayTeddy.jsx'
import UpdateTeddy from './Pages/Admin/ProductsPage/UpdateTeddyBares/UpdateTeddy.jsx'

//Flowers part
import FlowerAdd from './Pages/Admin/ProductsPage/FlowerAddPage/FlowerAdd.jsx'
import DisplayFlowers from './Pages/Admin/ProductsPage/DisplayFlower/DisplayFlowers.jsx'
import UpdateFlowers from './Pages/Admin/ProductsPage/UpdateFlowers/UpdateFlowers.jsx'

//Slipper part
import SlipperAdd from './Pages/Admin/ProductsPage/SlipperAddPage/SlipperAdd.jsx'
import DisplaySlipppers from './Pages/Admin/ProductsPage/DisplaySlipper/DisplaySlipper.jsx'
import UpdateSlippers from './Pages/Admin/ProductsPage/UpdateSlippers/UpdateSlippers.jsx'



function App() {


  return (
    <>
    <Routes>
    <Route path='/Nav' element={<NavBar/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Login' element={<LoginPage/>}/>

    
    <Route path='/Footer' element={<Footer/>}/>
    <Route path='/products' element={<ProductsPage/>}/>


    <Route path='/About' element={<About/>}/>
    <Route path='/UserRegister' element={<UserRegister/>}/>
    <Route path='/forgotpswd' element={<Forgotpswd/>}/>

    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/userprofile' element={<Users/>}/>
    <Route path='/update/:id' element={<UserUpdates/>}/>

    <Route path='/addteddybares' element={<AddTeddybares/>}/>
    <Route path='/displayteddybares' element={<DisplayTeddy/>}/>
    <Route path='/updateteddybares/:id' element={<UpdateTeddy/>}/>

    <Route path='/addflower' element={<FlowerAdd/>}/>
    <Route path='/displayflowrs' element={<DisplayFlowers/>}/>
    <Route path='/updateflower/:id' element={<UpdateFlowers/>}/>

    <Route path='/addslipper' element={<SlipperAdd/>}/>
    <Route path='/displayslippers' element={<DisplaySlipppers/>}/>
    <Route path='/updateslipper/:id' element={<UpdateSlippers/>}/>

    <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
    <Route path='/topproduct' element={<TopProduct/>}/>

    </Routes>
      
    </>
  )
}

export default App
