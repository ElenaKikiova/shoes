const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const shoeSchema = new Schema({
  name: String,
  price: Number,
  sizes: [Number],
  gender: [String],
  categoryIds: [Number],
  brandId: Number,
  imageURL: String,
  addedAt: {
    type: Date,
    default: Date.now,
  },
},
{ collection: "shoes" }
);
 
module.exports = mongoose.model("ShoeModel", shoeSchema);