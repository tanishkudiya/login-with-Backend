// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).json({ message: 'Registration failed', error });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Middleware to authenticate
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });
      req.userId = decoded.userId;
      next();
    });
  } else {
    res.status(403).json({ message: 'No token provided' });
  }
};

// Save workout for authenticated user
router.post('/workout', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    user.workouts.push(req.body);
    await user.save();
    res.json({ message: 'Workout saved' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save workout', error });
  }
});

module.exports = router;
