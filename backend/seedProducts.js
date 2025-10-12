const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const products = require("./data/products.json");

dotenv.config();

// Local MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/DripShip";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // Clear old products
    await Product.deleteMany();
    console.log("🧹 Old products removed");

    // Insert new products
    await Product.insertMany(products);
    console.log("🌱 New products seeded successfully!");

    // Close connection
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error seeding database:", err.message);
    process.exit(1);
  });
