import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"
import insta from "../../assets/insta.png"
import fb from "../../assets/fb.jpg"
import viber from "../../assets/viber.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="40px" />
            <p>Daily Wear</p>
        </div>
        <ul className='footer-links'>
<li>About</li>
<li>Products</li>
<li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
<div className="footer-icon-container">
<img src={insta} alt="" height="30px" />
</div>
<div className="footer-icon-container">
<img src={fb} alt="" height="30px"  />
</div>
<div className="footer-icon-container">
<img src={viber} alt=""  height="30px" />
</div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer