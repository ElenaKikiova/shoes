const brandService = require("../services/brandService");
 
exports.getAllBrands = async (req, res) => {
  try {
    const brands = await brandService.getAllBrands();
    res.json({ data: brands, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createBrand = async (req, res) => {
  try {
    const brand = await brandService.createBrand(req.body);
    res.json({ data: brand, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getBrandById = async (req, res) => {
  try {
    console.log(req.params)
    const brand = await brandService.getBrandById(req.params.id);
    res.json({ data: brand, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateBrand = async (req, res) => {
  try {
    const brand = await brandService.updateBrand(req.params.id, req.body);
    res.json({ data: brand, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteBrand = async (req, res) => {
  try {
    const brand = await brandService.deleteBrand(req.params.id);
    res.json({ data: brand, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};