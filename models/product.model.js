const mongoose = require("mongoose");

productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;
