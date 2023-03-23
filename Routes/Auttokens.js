import { json, Router } from "express";
import jwt from 'jsonwebtoken'
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import dotenv from 'dotenv'

const route =Router()

dotenv.config()   
route.post("/login",(req,res)=>{
  
  
   const user= User.find({
        email:req.body.email
      
        
    });
    const {password, ...others}=user
    console.log(password)
     console.log("hie")
     console.log(process.env.PASS_SET);  
    //  console.log(res.json(user.email));
    const hashedpass=CryptoJS.AES.decrypt(user.password,process.env.PASS_SET);
    const orignalpass =hashedpass.toString(CryptoJS.enc.Utf8)
    console.log(orignalpass)
    
    if(orignalpass!=hashedpass){
        res.status(401).json("Wrong password")

    }

})
export default(route)