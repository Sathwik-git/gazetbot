const express = require("express");
const mongoose = require("mongoose");
const allRoutes = require('./routes'); // This will automatically pick up index.js in the routes folder
const app = express();

// MongoDB connection string
const MONGODB_URI = "mongodb://127.0.0.1:27017/gazet-bot"; // replace 'yourDatabaseName' with your actual DB name

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// MongoDB error event
db.on("error", (err) => {
  console.error(`Connection error: ${err.message}`);
});

// MongoDB open event
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use Express's built-in JSON parser middleware to automatically parse incoming JSON payloads, making them accessible via req.body.
app.use(express.json());

app.use(allRoutes);

// Products by Category & Sub-Category
app.get("/products/:category/:sub-category", (req, res) => {
  // Use req.params.category and req.params.sub-category to fetch products.
  res.json({ filters: [], products: [] });
});

// Add to wishlist
app.post("/wishlist", (req, res) => {
  // Use req.body.user and req.body.productid to add to wishlist.
  res.sendStatus(200);
});

// Get Wishlist
app.get("/wishlist", (req, res) => {
  // Use req.query.user to fetch user's wishlist.
  res.json({ products: [] });
});

// Get Product Details
app.get("/product/:productid", (req, res) => {
  // Use req.params.productid to fetch product details.
  res.json({ product: {}, recommended_products: [] });
});

// Banners
app.get("/banners", (req, res) => {
  // Fetch banners from the database.
  res.json({ urls: [] });
});

// Add Products
app.post("/products", (req, res) => {
  // Use req.body.products to add products to the database.
  res.sendStatus(200);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
