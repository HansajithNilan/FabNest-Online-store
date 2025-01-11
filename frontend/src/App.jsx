import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'

import ForgotPasswordpage from "./Pages/ForgotPasswordPage/ForgotPage.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import ProductsPage from './Pages/ProductPage/ProductsPage.jsx'


import About from './Pages/AboutUsPage/About.jsx'
import UserRegister from './Pages/UserRegisterPage/UserRegister.jsx'
import Forgotpswd from './Pages/Forgotpswd/Forgotpswd.jsx'
import ContactUs from './Pages/ContactUsPage/ContactUs.jsx'
import Users from './Pages/UserProfile/UserProfile.jsx'
import UserUpdates from './Pages/UpdateUsers/UpdateUsers.jsx'


//Admin Pages

//Teddy Bares Part
import AddTeddybares from './Pages/Admin/ProductsPage/TeddyAddPage/AddProducts.jsx'
import DisplayTeddy from './Pages/Admin/ProductsPage/DisplayTeddybares/DisplayTeddy.jsx'
import UpdateTeddy from './Pages/Admin/ProductsPage/UpdateTeddyBares/UpdateTeddy.jsx'



function App() {


  return (
    <>
    <Routes>
    <Route path='/Nav' element={<NavBar/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Login' element={<LoginPage/>}/>

    <Route path='/Forgot' element={<ForgotPasswordpage/>}/>
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

    </Routes>
      
    </>
  )
}

export default App
