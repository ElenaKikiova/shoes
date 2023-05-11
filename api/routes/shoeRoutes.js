const express = require("express");
const {
  getAllShoes,
  createShoe,
  getShoeById,
  updateShoe,
  deleteShoe,
} = require("../controllers/shoeController");
 
const router = express.Router();
 
router.route("/").get(getAllShoes).post(createShoe);
router.route("/:id").get(getShoeById).put(updateShoe).delete(deleteShoe);
 
module.exports = router;