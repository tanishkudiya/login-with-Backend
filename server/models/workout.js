const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exerciseName: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number },
  email: { type:String, required:true, unique:true},
});

const workoutSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  date: { type: String, required: true },
  exercises: [exerciseSchema],
});

const WorkoutModel = mongoose.model('Workout', workoutSchema);
module.exports = WorkoutModel;
