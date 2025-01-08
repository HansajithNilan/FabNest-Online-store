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
   

    </Routes>
      
    </>
  )
}

export default App
