
import { Router } from "express";
import Stripe from "../models/Booking.js";
const router=Router()
router.post("/payment", async (req, res) => {
 console.log("in payment");
  try{
  var book= new Stripe({
     email:req.body.email,
     Propertyname:req.body.Propertyname
     ,
     image:req.body.image,
     Propertydesc:req.body.Propertydesc,
     prize:req.body.prize
   })  

  await  book.save().then(resolve=>{res.send(resolve)}).catch((err)=>console.log(err))  
  }catch{err=>{console.log(err);}
     
  }
})
//getall
router.get("/payment",(req,res)=>{

Stripe.find().then((resolve=>{
  res.send(res.json(resolve))
})).catch(err=>{
  console.log(err);
})

})

router.post("/booking",(req,res)=>{

  Stripe.find({email:req.body.email}).then((resolve=>{
  
    res.send(res.json(resolve))
  })).catch(err=>{
    console.log(err);
  })
  
  })
  


 export default router;