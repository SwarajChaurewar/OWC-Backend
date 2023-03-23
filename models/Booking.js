
import mongoose from "mongoose";


 const stripe=mongoose.Schema(
{
    email:{type:String ,required:true},
    Propertyname:{type:String ,required:true},
    image: { type: String, data: Buffer,required:true },
    Propertydesc:{type:String}
    ,prize:{type:Number}
}
 )


export default mongoose.model("Stripe",stripe)