import mongoose from "mongoose";

const Enquiry=mongoose.Schema({
   
    name:{type:String ,required:true},
    phoneno:{type:Number,required:true}
    ,WorkEmail:{
        type:String, required:true
    } ,
    CompanyName:{type:String},
    Seats:{type:Number},
    Intrest:{type:String},
    tour:{
        type:Boolean,
        default:false
    }


})