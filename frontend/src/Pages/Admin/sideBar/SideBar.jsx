import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <div className='content-bar'>
      <ul className='sidebar'>
        <li><a href='/admindashboard/:id'>Dashboard</a></li>
        <li><a href='/addteddybares'>Add Products</a></li>
        <li><a href='/displayteddybares'>Products</a></li> 
      </ul>
    </div>
  )
}

export default SideBar
