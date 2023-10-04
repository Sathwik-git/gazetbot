const express = require("express");
const Product = require("../schema/productSchema");
const router = express.Router();

router.get("/products", async (req, res) => {
  const { query } = req.query;

  try {
    // Find products that match query
    const products = await Product.find({
      name: { $regex: new RegExp(query, "i") },
    }).limit(10);

    // Map products to formatted response array
    const results = products.map((product) => {
      return {
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      };
    });

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching products");
  }
});

module.exports = router;
