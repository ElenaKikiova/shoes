const categoryService = require("../services/categoryService");
 
exports.getAllCategories = async (req, res) => {
  try {
    const data = await categoryService.getAllCategories(req.query);
    res.json({ ...data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteCategory = async (req, res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};