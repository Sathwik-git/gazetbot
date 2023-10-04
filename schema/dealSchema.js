const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: String,
  discount: Number,
  image: String,
  tags: [String],
});
const Deal = mongoose.model("Deal", dealSchema);

module.exports = Deal;
