import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'

import About from './Pages/AboutUsPage/About.jsx'
import UserRegister from './Pages/UserRegisterPage/UserRegister.jsx'
import Forgotpswd from './Pages/Forgotpswd/Forgotpswd.jsx'
import ContactUs from './Pages/ContactUsPage/ContactUs.jsx'




function App() {


  return (
    <>
    <Routes>
    <Route path='/Nav' element={<NavBar/>}/>
    <Route path='/Home' element={<HomePage/>}/>
    <Route path='/Login' element={<LoginPage/>}/>

    <Route path='/About' element={<About/>}/>
    <Route path='/UserRegister' element={<UserRegister/>}/>
    <Route path='/forgotpswd' element={<Forgotpswd/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>

    </Routes>
      
    </>
  )
}

export default App
