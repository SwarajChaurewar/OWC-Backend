import { Router } from "express";
import Enquiry from "../models/Enquiry.js";

const route = Router();

// Add property

route.post("/enq", async (req, res) => {
    new Enquiry({ name:req.params.name,
    phoneno:req.params.phoneno,
    WorkEmail:req.params.WorkEmail,
    CompanyName:req.params.CompanyName,
    Seats:req.params.Seats,
    Intrest:req.params.Intrest,
    tour:req.params.tour
})
  await Property1.save().then(()=>res.status(200).json("Saved")).catch(err=>res.status(500).json(err))
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

//remove by id
route.delete("/property", (req, res) => {
  Property.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json("sucessfull"))
    .catch(() => res.status(500));
});

export default route;
