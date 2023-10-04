const express = require('express');
const TopProduct = require('../schema/topproductSchema');
const router = express.Router();

// Get top products
router.get('/', async (req, res) => {
  try {
    const topProducts = await TopProduct.find({})
      .sort({createdAt: -1})
      .limit(10);
    
    res.json(topProducts);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Server error'});
  }
});

// Get single top product
router.get('/:id', async (req, res) => {
  try {
    const topProduct = await TopProduct.findById(req.params.id);
    
    if (!topProduct) {
      return res.status(404).json({message: 'Top product not found'});
    }
    
    res.json(topProduct);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({message: 'Server error'}); 
  }
});

module.exports = router;