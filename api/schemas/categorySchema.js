const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 200
  },
  season: {
    type: String,
    enum: ['Any', 'Spring - Autumn', 'Summer', 'Winter'],
  },
  description: {
    type: String,
    required: true,
    maxLength: 200
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
  shoes: [{ type: mongoose.Types.ObjectId, ref: 'ShoeModel' }],
  brands: [{ type: mongoose.Types.ObjectId, ref: 'BrandModel' }]
},
{ collection: "categories" }
);
 
module.exports = mongoose.model("CategoryModel", categorySchema);