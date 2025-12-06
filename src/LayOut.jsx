import React from 'react'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const LayOut = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
      
    </div>
  )
}

export default LayOut