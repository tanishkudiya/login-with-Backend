// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  profilePicture: { type: String }, // Base64 image string
  goals: { type: String },
  workoutsCompleted: { type: Number, default: 0 },
  caloriesBurned: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
