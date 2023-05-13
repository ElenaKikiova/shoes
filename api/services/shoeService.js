const ShoeModel = require("../schemas/shoeSchema");
 
exports.getAllShoes = async (query) => {
  const count = await ShoeModel.count();
  let searchParams = {};

  if(query.name){
    searchParams.name = new RegExp(searchParams.name, "i");
  }

  if(query.minPrice && query.minPrice != 0){
    searchParams.price = { $gte: query.minPrice }
  }

  if(query.maxPrice){
    searchParams.price = {...searchParams.price, $lte: query.maxPrice }
  }

  console.log(query, searchParams)

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