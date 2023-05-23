const CategoryModel = require("../schemas/categorySchema");
const { readSearchParams } = require("../searchHelper");
 
exports.getAllCategories = async (query) => {
  const searchParams = readSearchParams(query);
  
  const count = await CategoryModel.countDocuments(searchParams);

  const data = await CategoryModel.find(searchParams)
  .skip(query.pageSize * (query.pageNumber - 1))
  .limit(query.pageSize);

  return {
    data,
    count: count
  }
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