import { Router } from "express";
import property from "../models/property.js";
import Property from "../models/property.js";

const route = Router();

// Add many properties
route.post("/props",async(req,res)=>{
  const Property1 = new Property({
    country: req.body.country,
    State: req.body.State,

    city: req.body.city,

    Propertyname: req.body.Propertyname,
    Status: req.body.Status,
    Propertydesc: req.body.Propertydesc,
    propertytype: req.body.propertytype,
    subtype: req.body.subtype,
    prize: req.body.prize,

    image: req.body.image,
  });
  await Property1.insertmany().then(()=>res.status(200).json("Saved")).catch(err=>res.status(500).json(err))   


})

// Add property

route.post("/property",  async(req, res) => {


  
  console.log(req.body);
 try{
  const Property1 = new Property({
    country: req.body.country,
    State: req.body.State,

    city: req.body.city,

    Propertyname: req.body.Propertyname,
    Status: req.body.Status,
    Propertydesc: req.body.Propertydesc,
    propertytype: req.body.propertytype,
    subtype: req.body.subtype,
    prize: req.body.prize,

    image: req.body.image,
  });
 await  Property1.save().then(()=>res.status(200).json("Saved")).catch(err=>res.status(500).json(err))
}catch{
  err=>{
    console.log(err);
  }
}
});

//Get All
route.get("/property", (req, res) => {
  try {
    property
      .find()
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
//find by Country
route.post("/propertyname", (req, res) => {
  Property.find({country:req.params.country}).then((properties)=>res.status(200).json(properties)).catch(err=>res.status(500).json(err));
});
//find by propertytype 

route.get("/officespaces", (req, res) => {
  try {
    property
      .find({propertytype:"Officespace"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
 

//find by propertytype  Desk

route.get("/desk", (req, res) => {
  try {
    property
      .find({propertytype:"Dedicated Desk"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
 
//find property by education

route.get("/education", (req, res) => {
  try {
    property
      .find({propertytype:"Educational"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});
 
 
//find property by Restaurant

route.get("/restaurant", (req, res) => {
  try {
    property
      .find({propertytype:"Restaurant"})
      .then((props) => res.send(res.json(props)))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500);
  }
});

//remove by id
  // route.post("/property", (req, res) => {
  //   console.log(req.body._id);
  //   Property.deleteOne({ _id: req.body._id })
  //     .then(() => res.status(200).json("sucessfull"))
  //     .catch(() => res.status(500));
  // });

//route to get count
route.get("/count",(req,res)=>{
  Property.countDocuments({ _id: { "$exists": true } }).then((value)=>res.send(res.json(value)))
  .catch(()=>{res.status(500)})
})


//remove by propertyname
route.post("/pdelete", (req, res) => {
  
  Property.deleteOne({_id:req.body._id}).then((user)=>res.status(200).json(user)).catch((err)=>res.status(500).json(err))
});

//add image architecture
route.put('/customproperty',(req,res)=>{
  Property.updateOne(
    { email:req.body.email},
    {$set:{image:req.body.image}},{new:true}).then(()=>res.send("sucess")).catch(err=>console.log(err))
})

export default route;
