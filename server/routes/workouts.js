const express = require('express');
const Workout = require('../models/workout.js');
const router = express.Router();
const auth = require('../middleware/auth');

// Create Workout
router.post('/', auth, async (req, res) => {
  const workout = new Workout({ ...req.body, userId: req.user.id });
  await workout.save();
  res.status(201).json(workout);
});

// Get User Workouts
router.get('/', auth, async (req, res) => {
  const workouts = await Workout.find({ userId: req.user.id });
  res.json(workouts);
});

module.exports = router;
