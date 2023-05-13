const ShoeModel = require("../schemas/shoeSchema");
 
exports.getAllShoes = async (pageSize, pageNumber) => {
  const count = await ShoeModel.count();
  const data = await ShoeModel.find()
  .skip(pageSize * (pageNumber - 1))
  .limit(pageSize)
  .populate('brand');

  return {
    data,
    count: count
  }
};
 
exports.createShoe = async (shoe) => {
  return await ShoeModel.create(shoe);
};
exports.getShoeById = async (id) => {
  return await ShoeModel.findById(id).populate('brand').populate('categories');
};
 
exports.updateShoe = async (id, shoe) => {
  return await ShoeModel.findByIdAndUpdate(id, shoe);
};
 
exports.deleteShoe = async (id) => {
  return await ShoeModel.findByIdAndDelete(id);
};