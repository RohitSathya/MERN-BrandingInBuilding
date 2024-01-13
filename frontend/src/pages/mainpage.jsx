import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './main.css'
import mike from '../images/mike.avif'
import { useNavigate } from 'react-router-dom'

export default function mainpage({data1,data2}) {
   
  const navigate=useNavigate()


  return (
   <>
   <div className='main'>
  
    <div className='hero'>
      <p style={{fontSize:'50px',color:'white'}}>Welcome to Royo Building Platform</p>
      <p style={{fontSize:'30px',color:'cadetblue',fontWeight:'600',marginLeft:'-90px',marginTop:'-10px'}}>Find the perfect building for your needs or showcase your property to potential buyers.</p>
    </div>
    <div className='but' style={{display:'flex',flexDirection:'column',marginLeft:'-800px',marginTop:'402px'}}>
    <button className='b1' >Post a Building</button>
    <button className='b1' onClick={()=>navigate('/search')}>Search Buildings</button>
    </div>
    <div className='fb'>
      <h3>Offer of the Day!!</h3>
      <img src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600' className='fimage'></img>
      <h3>Location:Chennai</h3>
      <h3>Price:$2 Per Day</h3>
      <button className='b2'>Book Right Now</button>
    </div>
    <div className='fb2'>
      <h3>Offer of the Day!!</h3>
      <img src='https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&w=1600' className='fimage'></img>
      <h3>Location:Banglore</h3>
      <h3>Price:$5 Per Day</h3>
      <button className='b2'>Book Right Now</button>
    </div>
    <div className='revs'>
      <h2 style={{paddingLeft:'22px',color:'black'}}>Our Beloved Clients Reviews</h2>
      <div className='rev1' style={{display:'flex'}}>
      <img src={mike}  style={{borderRadius:'50px',width:'49px',height:'48px',marginTop:'16px',marginLeft:'20px'}}></img>
      <h3 style={{color:'white',paddingLeft:'20px',fontSize:'18px',fontWeight:'600'}}>Wow great unique platform for advertisement!!</h3>
      
      </div>
      <div className='rev2' style={{display:'flex',marginTop:'20px'}}>
      <img src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D'  style={{borderRadius:'50px',width:'49px',height:'48px',marginTop:'16px',marginLeft:'20px'}}></img>
      <h3 style={{color:'white',paddingLeft:'10px',fontSize:'18px',fontWeight:'600',paddingTop:'10px'}}>Got saled My product in fast time!!</h3>
      
      </div>
      <div className='rev3' style={{display:'flex',marginTop:'20px'}}>
      <img src='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D'  style={{borderRadius:'50px',width:'49px',height:'48px',marginTop:'16px',marginLeft:'20px'}}></img>
      <h3 style={{color:'white',paddingLeft:'10px',fontSize:'18px',fontWeight:'600',paddingTop:'2px'}}>I never thought finding the perfect building could be this easy! The platform is user-friendly, and I found my banners space within days. Highly recommended!</h3>
      
      </div>
      <div className='rev4' style={{display:'flex',marginTop:'20px'}}>
      <img src='https://plus.unsplash.com/premium_photo-1669688174645-2df488f07069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGV8ZW58MHx8MHx8fDA%3D'  style={{borderRadius:'50px',width:'49px',height:'48px',marginTop:'16px',marginLeft:'20px'}}></img>
      <h3 style={{color:'white',paddingLeft:'10px',fontSize:'18px',fontWeight:'600',paddingTop:'2px'}}>As a property owner, posting my building on this platform was a breeze. The process is straightforward, and I received inquiries from potential buyers almost immediately. Great service!</h3>
      
      </div>
  
    </div>
    
    
    
   </div>
 
   </>
  )
}
