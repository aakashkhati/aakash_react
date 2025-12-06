import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="60"/>
        <p>Daily Wear</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style=
        {{textDecoration:"none",color:"#24140fff"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("summer")}}><Link style=
        {{textDecoration:"none",color:"#24140fff"}} to="/summer">Summer Wear</Link>{menu==="summer" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("winter")}}><Link style=
        {{textDecoration:"none",color:"#24140fff"}} to="/winter"> Winter Wear</Link>{menu==="winter" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart"><Link to="/login">
        <button>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar