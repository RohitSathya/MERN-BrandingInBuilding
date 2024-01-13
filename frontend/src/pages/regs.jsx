import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './regs.css'
export default function () {

    const[name,setname]=useState('')
    const[pass,setpass]=useState('')
    const navigate=useNavigate()

    const submit=async()=>{
        try{
           const response=await axios.post('http://localhost:8080/register',{name:name,pass:pass,msg:''})
           const {message}=response.data
           if(message=='username name already exists'){
             alert('username name already exists')
           }
           else{
            navigate('/')
           }
         

            
        }catch(error){
            console.log(error)
        }
        setname('')
        setpass('')
    }
  return (
  <>
   <div className='login'>
    <div className='box1'>
      <img src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D' className='i1'>

      </img>
     
     

</div>
<div className='box2'>
   <h1>Sign Up</h1>
      <input type='text' placeholder='Username' className='ip1' name='username' value={name} onChange={(e)=>setname(e.target.value)}></input>
      <input type='password' placeholder='Password' className='ip2' name='password' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
      <button className='b1' onClick={submit}>Register</button>
     

   </div>

    

    </div>
  </>
  )
}
