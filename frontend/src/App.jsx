import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'
import ForgotPasswordpage from "./Pages/ForgotPasswordPage/ForgotPage.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {


  return (
    <>
    <Routes>
    <Route path='/Nav' element={<NavBar/>}/>
    <Route path='/Home' element={<HomePage/>}/>
    <Route path='/Login' element={<LoginPage/>}/>
    <Route path='/Forgot' element={<ForgotPasswordpage/>}/>
    <Route path='/Footer' element={<Footer/>}/>
    </Routes>
      
    </>
  )
}

export default App
