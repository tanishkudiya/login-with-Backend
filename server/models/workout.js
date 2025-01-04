const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exerciseName: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number },
});

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  exercises: [exerciseSchema],
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const WorkoutModel = mongoose.model('Workout', workoutSchema);
module.exports = WorkoutModel;
