const ShoeModel = require("../schemas/shoeSchema");
 
exports.getAllShoes = async () => {
  return await ShoeModel.find();
};
 
exports.createShoe = async (shoe) => {
  console.log(shoe)
  return await ShoeModel.create(shoe);
};
exports.getShoeById = async (id) => {
  return await ShoeModel.findById(id);
};
 
exports.updateShoe = async (id, shoe) => {
  return await ShoeModel.findByIdAndUpdate(id, shoe);
};
 
exports.deleteShoe = async (id) => {
  return await ShoeModel.findByIdAndDelete(id);
};