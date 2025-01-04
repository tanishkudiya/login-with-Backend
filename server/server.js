// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const EmployeeModel = require("./models/employee.js");
// const WorkoutModel = require("./models/workout.js");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/workout_app", { useNewUrlParser: true, useUnifiedTopology: true });

// // User Signup
// app.post("/register", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.create({ email, password })
//         .then(user => res.json(user))
//         .catch(err => res.status(400).json(err));
// });

// // User Login
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email })
//         .then(user => {
//             if (!user) {
//                 return res.status(404).json("User not found");
//             }
//             if (user.password === password) { // Ideally, use hashing for passwords
//                 res.json("Login successful");
//             } else {
//                 res.status(401).json("Incorrect password");
//             }
//         })
//         .catch(err => res.status(500).json(err));
// });

// app.get('/workouts', async (req, res) => {
//   try {
//     const workouts = await Workout.find();
//     res.json(workouts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post('/workouts', async (req, res) => {
//   const newWorkout = new Workout(req.body);
//   try {
//     const savedWorkout = await newWorkout.save();
//     res.status(201).json(savedWorkout);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.delete('/workouts/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//       const deletedWorkout = await Workout.findByIdAndDelete(id);
//       if (!deletedWorkout) {
//         return res.status(404).json({ message: 'Workout not found' });
//       }
//       res.json({ message: 'Workout deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

// // // Create Workout
// // app.post("/workouts", (req, res) => {
// //     const { title, userId } = req.body; // Ensure userId is provided
// //     WorkoutModel.create({ title, userId })
// //         .then(workout => res.json(workout))
// //         .catch(err => res.status(400).json(err));
// // });

// // // Get Workouts for a User
// // app.get("/workouts/:userId", (req, res) => {
// //     WorkoutModel.find({ userId: req.params.userId })
// //         .then(workouts => res.json(workouts))
// //         .catch(err => res.status(500).json(err));
// // });

// // Start the server
// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const EmployeeModel = require("./models/employee");
const WorkoutModel = require("./models/workout");
const jwt = require('jsonwebtoken');

// Secret key for signing the JWT
// const SECRET_KEY = 'your_secret_key';

// Function to generate a JWT
// function generateToken(user) {
//     // Payload can include user data
//     const payload = {
//         id: user.id,
//         email: user.email
//     };

//     // Generate token (expires in 1 hour)
//     const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

//     return token;
// }



app.use(express.json());
app.use(cors());

// app.use(bodyParser.json({ limit: '50mb' })); // Increase limit to 10MB or adjust as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const User = require('./models/User');

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/workoutDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Register Route
app.post("/register", async (req, res) => {
  // const { email, password } = req.body;
  try {
    const newUser = await EmployeeModel.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Email already in use" });
  }
});

const JWT_SECRET = process.env.JWT_SECRET;

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await EmployeeModel.findOne({ email });
  if (user && await user.comparePassword(password)) {
    // res.json("Login successful");
    const token = generateToken(user);
    res.json({ message: 'Login successful', token });
  } else {
    res.status(400).json("Invalid email or password");
  }
});


// const authenticateToken = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(401).json({ message: "Access denied" });

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: "Invalid token" });
//     req.user = user;
//     next();
//   });
// };

// // Protected Route Example
// app.get("/api/protected", authenticateToken, (req, res) => {
//   res.json({ message: "This is a protected route", userId: req.user.userId });
// });



// Routes
app.get('/api/workouts', async (req, res) => {
  try {
    const workouts = await WorkoutModel.find();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/workouts', async (req, res) => {
  const newWorkout = new WorkoutModel(req.body);
  try {
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/workouts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorkout = await WorkoutModel.findByIdAndDelete(id);
    if (!deletedWorkout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/api/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Save or update user profile data
app.post('/api/user', async (req, res) => {
  try {
    const { name, age, profilePicture, goals, workoutsCompleted, caloriesBurned } = req.body;

    // Find or create a new user
    let user = await User.findOne({ name }); // Example identifier, could also use user ID or email
    if (user) {
      // Update existing user
      user.age = age;
      user.profilePicture = profilePicture;
      user.goals = goals;
      user.workoutsCompleted = workoutsCompleted;
      user.caloriesBurned = caloriesBurned;
      await user.save();
    } else {
      // Create a new user
      user = new User({ name, age, profilePicture, goals, workoutsCompleted, caloriesBurned });
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data', error });
  }
});

// Fetch user profile data
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne(); // You may want to customize this query
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

