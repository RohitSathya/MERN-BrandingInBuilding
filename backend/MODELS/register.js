const mongoose=require('mongoose')

const register=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please"]
            
        },
        pass:{
            type:String,
            
           
        },
        msg:{
            type:String,
        }
        
    },{
        timestamps:true
    }
)
const rp=mongoose.model('Registration',register)
module.exports=rp