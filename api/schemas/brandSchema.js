const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const brandSchema = new Schema({
  name:  {
    type: String,
    required: true,
    maxLength: 100
  },
  establishedAt: Number,
  description:  {
    type: String,
    required: true,
    maxLength: 200
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
  shoes: [{ type: mongoose.Types.ObjectId, ref: 'ShoeModel' }],
  categories: [{ type: mongoose.Types.ObjectId, ref: 'CategoryModel' }]
},
{ collection: "brands" }
);
 
module.exports = mongoose.model("BrandModel", brandSchema);