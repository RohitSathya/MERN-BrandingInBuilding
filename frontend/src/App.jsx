import { useState } from 'react'

import './App.css'
import building from './images/building.jpeg'
import Regs from './pages/regs'
import Login from './pages/login'
import Mainpage from './pages/mainpage'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'
function App() {
  
 const[name,setname]=useState('')
 const[pass,setpass]=useState('')

 function get(a,b){
  setname(a)
  setpass(b)

 }

  return (
    <>
 
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Regs/>}></Route>
      <Route path='/login' element={<Login func={get}/>}></Route>
      <Route path='/main' element={<Mainpage data1={name} data2={pass}/>}></Route>
      <Route path='/search' element={<Search/>}></Route>

     </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
