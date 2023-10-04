const express = require("express");
const Deal = require("../schema/dealSchema");
const router = express.Router();

router.get("/deals", async (req, res) => {
  try {
    // Find deals from database
    const deals = await Deal.find({});

    // Map deals to formatted response array
    const formattedDeals = deals.map((deal) => {
      return {
        title: deal.title,
        discount: deal.discount,
        image: deal.image,
        tags: deal.tags,
      };
    });

    // Return deals
    res.json({ deals: formattedDeals });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching deals");
  }
});

module.exports = router;
