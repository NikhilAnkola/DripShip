const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// GET /api/users -> fetch all users (for testing purposes)
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // exclude password for safety
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
});

// POST /api/users/login -> login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: `Welcome ${username}` });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;