const BrandModel = require("../schemas/brandSchema");
 
exports.getAllBrands = async () => {
  return await BrandModel.find();
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