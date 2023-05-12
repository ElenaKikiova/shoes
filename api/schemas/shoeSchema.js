const mongoose = require('mongoose');
const { Schema } = mongoose;

const shoeSchema = new Schema({
  name:  {
    type: String,
    required: true,
    maxLength: 100
  },
  price: {
    type: Number,
    min: 0
  },
  sizes: [{type: Number}],
  gender: [{type: String}],
  imageURL:  {
    type: String,
    required: true,
    maxLength: 1000
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
  brand: { type: mongoose.Types.ObjectId, ref: 'BrandModel' },
  categories: [{ type: mongoose.Types.ObjectId, ref: 'CategroryModel' }]
},
{ collection: "shoes" }
);

module.exports = mongoose.model("ShoeModel", shoeSchema);