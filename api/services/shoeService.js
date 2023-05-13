const ShoeModel = require("../schemas/shoeSchema");
const { readSearchParams } = require("../searchHelper");
 
exports.getAllShoes = async (query) => {
  
  const searchParams = readSearchParams(query);
  
  const count = await ShoeModel.countDocuments(searchParams);

  const data = await ShoeModel.find(searchParams)
  .skip(query.pageSize * (query.pageNumber - 1))
  .limit(query.pageSize)
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