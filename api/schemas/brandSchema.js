const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const brandSchema = new Schema({
  name: String,
  description: String
},
{ collection: "brands" }
);
 
module.exports = mongoose.model("BrandModel", brandSchema);