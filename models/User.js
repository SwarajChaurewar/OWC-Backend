import mongoose, { Schema } from "mongoose";


 const User=new Schema({
    name:{type:String,required:true },
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true },
    phoneno:{type:Number,required:true},
    role:{type:String, required:true }  ,
    images:  {type:String, default:""}
    ,orders:{
        type:Boolean,
        default:false

    }
   


}
,
{timestamps:true}
)

export default mongoose.model('User',User)




