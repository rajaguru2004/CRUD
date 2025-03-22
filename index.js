const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("heloo from api");
});

app.get("/api/products", async (req, res, next) => {
  try {
    const product = await Product.find({});
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send().json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    set.status(500).json({ message: error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
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
});

//to delete the product

app.delete("/api/products/:id", async (req, res) => {
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
});

app.post("/api/products", async (req, res, next) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send().json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://rajaguru2004:guru2004@backeddb.dx053.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackedDb"
  )
  .then(() => {
    console.log("connected to the data base");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
