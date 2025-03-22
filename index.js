const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productroutes = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("heloo from api");
});

app.use("/api/products/", productroutes);

//to delete the product

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
