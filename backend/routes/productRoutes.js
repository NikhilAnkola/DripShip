// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const products = require('../data/products.json'); // local JSON file

// GET /api/products  -> return all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET /api/products/:id  -> return a single product by id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

module.exports = router;
