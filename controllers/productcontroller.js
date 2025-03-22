const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send().json({ message: error.message });
  }
};
