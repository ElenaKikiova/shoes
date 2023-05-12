const shoeService = require("../services/shoeService");
 
exports.getAllShoes = async (req, res) => {
  try {
    const shoes = await shoeService.getAllShoes();
    res.json({ data: shoes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createShoe = async (req, res) => {
  try {
    const shoe = await shoeService.createShoe(req.body);
    res.json({ data: shoe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getShoeById = async (req, res) => {
  try {
    const shoe = await shoeService.getShoeById(req.params.id);
    res.json({ data: shoe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateShoe = async (req, res) => {
  try {
    const shoe = await shoeService.updateShoe(req.params.id, req.body);
    res.json({ data: shoe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteShoe = async (req, res) => {
  try {
    const shoe = await shoeService.deleteShoe(req.params.id);
    res.json({ data: shoe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};