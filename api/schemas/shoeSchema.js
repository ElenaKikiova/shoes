const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const shoeSchema = new Schema({
  name: String,
  price: Number,
  sizes: [{type: Number}],
  gender: [{type: String}],
  categoryIds: [{type: Number}],
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