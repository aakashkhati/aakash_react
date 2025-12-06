import React from 'react'
import "./Hero.css"

import model from "../../assets/model.webp"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>A    Place   For   Your   Clothes !!
    </h2>
      
       
        <p>We believe in the jacket that outlives a trend, the dress that remembers a dance</p>
        <p>and the soft, familiar sweater that feels like a conversation with an old friend.</p>

        
</div>


        <div className="hero-right">
            <img src={model} alt="" height="400px" />
        </div>
    </div>
  )
}

export default Hero
