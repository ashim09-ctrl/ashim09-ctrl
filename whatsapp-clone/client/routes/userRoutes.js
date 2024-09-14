const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user by username
router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new user
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
