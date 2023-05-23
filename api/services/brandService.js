const BrandModel = require("../schemas/brandSchema");
const { readSearchParams } = require("../searchHelper");
 
exports.getAllBrands = async (query) => {

  const searchParams = readSearchParams(query);

  const count = await BrandModel.countDocuments(searchParams);

  const data = await BrandModel.find(searchParams)
  .skip(query.pageSize * (query.pageNumber - 1))
  .limit(query.pageSize);

  return {
    data,
    count: count
  }
};
 
exports.createBrand = async (brand) => {
  return await BrandModel.create(brand);
};
exports.getBrandById = async (id) => {
  return await BrandModel.findById(id);
};
 
exports.updateBrand = async (id, brand) => {
  return await BrandModel.findByIdAndUpdate(id, brand);
};
 
exports.deleteBrand = async (id) => {
  return await BrandModel.findByIdAndDelete(id);
};