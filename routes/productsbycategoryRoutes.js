const express = require("express");
const router = express.Router();
const Product = require("../schema/productSchema");

router.get("/products/:category", async (req, res) => {
  try {
    const category = req.params.category;

    // Fetch products from the database based on the category
    const products = await Product.find({ category: category });

    // Here, you can also implement logic to determine filters based on products if needed
    const filters = []; // This can be filled based on your business logic

    res.json({ filters: filters, products: products });
  } catch (err) {
    console.error("Error fetching products by category:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
