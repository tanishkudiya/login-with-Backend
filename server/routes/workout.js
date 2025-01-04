const express = require('express');
const Workout = require('../models/workout');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// Create a workout
router.post('/', authenticate, async (req, res) => {
  const { name, date, exercises } = req.body;
  try {
    const workout = new Workout({ name, date, exercises, userId: req.user.id });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ message: 'Workout creation failed', error });
  }
});

// Get workouts for the logged-in user
router.get('/', authenticate, async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts', error });
  }
});

module.exports = router;
