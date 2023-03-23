import { json, Router } from "express";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";



let userdata;
const route = Router();

//FindbyEmail
route.post("/contactus", (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  const { subject } =req.body;
  const { name } =req.body;
  const { desc } =req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      userdata = user;
      console.log(userdata);
      res.send("sucess");

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "owccontactus@gmail.com",
          pass: "ylitrfcawcmwxfkt", // PERSON ID OF ME DONT USE IT
        },
      });

      let mailOptions = null;
      mailOptions = {
        from: "owccontactus@gmail.com", // sender address
        to: email, // list of receivers
        subject:"Regarding for cotact us " , // Subject line
        html:"Thank You For Contact Us We Will Reach You As Soon As Possible" // plain text body
      };

      const result = {
        Status: "",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // console.log(result);
        } else {
          // console.log(info);
        }
        result[Status] = "sucess";
        return result;
      });
    } else {
      res.send({ message: "Not Registered User" });
    }
  });
});

export default (route)

