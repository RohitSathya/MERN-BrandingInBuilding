const port=8080
const express=require('express')
const multer=require('multer')
const path=require('path')
const mongoose=require('mongoose')
const app=express()
const registermodel=require('./MODELS/register')
const cors=require('cors')
app.use(cors())
app.use(express.json())
let product=null
app.post('/register',async(req,res)=>{
    const{name,pass}=req.body
    const exist=await registermodel.findOne({name})
    if(exist){
        res.status(200).json({message:'username name already exists'})
    }
    else{
        product=await registermodel.create(req.body)
        res.status(200).json(product)
        console.log(product)

    }
    

})
app.get('/register',async(req,res)=>{
    const productget=await registermodel.find()
    res.status(200).json(productget)
})
app.post('/login',async(req,res)=>{
  
    const user=await registermodel.findOne(req.body)
    if(user){
        res.status(200).json({message:'login success',user})
        console.log(user.pass)

    }
    else{
        res.json({message:'faled'})
    }
})




mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:12345@royoapi.3qmdrjq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('database connected')
    app.listen(port,()=>console.log('running'))
})