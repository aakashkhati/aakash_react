import React from 'react'
import "../css/Login.css"
const LoginSignup = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className='login-fields'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Enter Password'/>
          <button>Continue</button>
        </div>
        
        <p className="login-login">
          Do you have an account ? <span>Login here</span>
        </p>
        
      </div>
    </div>
  )
}



export default LoginSignup