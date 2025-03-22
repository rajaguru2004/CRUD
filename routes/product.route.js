const express = require("express");

const router = express.Router();
const productController = require("../controllers/productcontroller");

router.get("/api/products", productController.getProducts);

module.exports = router;
