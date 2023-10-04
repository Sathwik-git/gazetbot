const mongoose = require('mongoose');

const topProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' 
  }]
});

const TopProduct = mongoose.model('TopProduct', topProductSchema);

module.exports = TopProduct;
