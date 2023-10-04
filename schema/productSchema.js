const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  images: [String],
  specifications: [String],
  youtubeLinks: [String],
  price: {
    amazon: {
      price: Number,
      discount: Number,
      rating: Number,
      url: String,
    },
    // ... other merchants
  },
  tags: [String],
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
