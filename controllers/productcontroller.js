const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send().json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    set.status(500).json({ message: error.message });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).send("no product find with the id");
    }
    const updatedProduct = await Product.findById(id);
    res
      .status(200)
      .json({ message: "product updated succesflly", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "product not found and havent deleted" });
    }
    const updatedProductList = await Product.find({});
    res
      .status(200)
      .json({ message: "product deleted successfully", updatedProductList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send().json({ message: error.message });
  }
};
