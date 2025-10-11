// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // added for MongoDB connection
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ------------------------------
// 🧠 MongoDB Connection (NEW)
// ------------------------------
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/DripShip';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(`✅ MongoDB connected to ${MONGO_URI}`))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});

// ------------------------------
// 🛍️ API Routes
// ------------------------------
app.use('/api/products', productRoutes);

// ------------------------------
// ⚙️ Health Check Route
// ------------------------------
app.get('/', (req, res) => {
  res.send({ status: 'ok', message: 'DripShip API running' });
});

// ------------------------------
// 🚀 Start Server
// ------------------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
