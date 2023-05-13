const CategoryModel = require("../schemas/categorySchema");
const { readSearchParams } = require("../searchHelper");
 
exports.getAllCategories = async (query) => {
  const searchParams = readSearchParams(query);
  return await CategoryModel.find(searchParams);
};
 
exports.createCategory = async (category) => {
  return await CategoryModel.create(category);
};
exports.getCategoryById = async (id) => {
  return await CategoryModel.findById(id);
};
 
exports.updateCategory = async (id, category) => {
  return await CategoryModel.findByIdAndUpdate(id, category);
};
 
exports.deleteCategory = async (id) => {
  return await CategoryModel.findByIdAndDelete(id);
};