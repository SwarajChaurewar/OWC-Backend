import mongoose, { Schema } from "mongoose";

const Property = new Schema({
  country: { type: String, required: true },
  State: { type: String, required: true },
  city: { type: String, required: true },

  Propertyname: { type: String, required: true},
  Status: { type: String, required: true },
  Propertydesc: { type: String, required: true },
  propertytype: { type: String, required: true },
  subtype: { type: String, required: true },
  prize: {
    type: Number,
    required: true,
  },
  image: { type: String, data: Buffer },
});

export default mongoose.model("Properties", Property);
