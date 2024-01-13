import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
export default function home() {
    const navigate=useNavigate()
  return (
    <>
      <div className="building-page">
      <div className="content-container">
        <h1 style={{color:'white'}}>Use Your Building to Earn Money</h1>
        <p>Unlock the potential of your space and start earning today!</p>
        <div className="cta-buttons">
          <button className="login-button"  onClick={()=>navigate('/login')} >Log In</button>
          <button className="signup-button" onClick={()=>navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
    </>
  )
}
