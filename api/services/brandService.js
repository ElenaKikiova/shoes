const BrandModel = require("../schemas/brandSchema");
const { readSearchParams } = require("../searchHelper");
 
exports.getAllBrands = async (query) => {
  const searchParams = readSearchParams(query);
  return await BrandModel.find(searchParams);
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