const express = require("express");
const Category = require('../schema/categorySchema');
const router = express.Router();
  


router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({});

    const formattedCategories = categories.map((cat) => {
      return {
        name: cat.name,
        sub_categories: cat.sub_categories,
      };
    });

    res.json({ categories: formattedCategories });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching categories");
  }
});

module.exports = router;
