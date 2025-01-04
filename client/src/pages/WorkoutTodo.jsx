import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/todostyle.css";
import Layout from '../components/layout/layout';


const WorkoutTodo = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [date, setDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [exercises, setExercises] = useState([{ exerciseName: '', sets: '', reps: '', weight: '' }]);
  const navigate = useNavigate();

  const handleExerciseChange = (index, e) => {
    const { name, value } = e.target;
    const newExercises = [...exercises];
    newExercises[index][name] = value;
    setExercises(newExercises);
  };

  const handleAddExercise = () => {
    setExercises([...exercises, { exerciseName: '', sets: '', reps: '', weight: '' }]);
  };

  const handleRemoveExercise = (index) => {
    const newExercises = exercises.filter((_, i) => i !== index);
    setExercises(newExercises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutData = {
      name: workoutName,
      date,
      dueDate,
      exercises,
    };
    
    try {
      const response = await fetch('http://localhost:5000/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workoutData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${error.message}`);
      }

      alert('Workout added successfully!');
      navigate('/workout-list');
    } catch (error) {
      console.error('Error adding workout:', error.message);
    }
  };

  return (
    <Layout>
      <div className='d-flex justify-content-center align-items-center flex-wrap flex-column'>
        <form className='working' onSubmit={handleSubmit}>
          <h2 className='d-flex justify-content-center align-items-center flex-wrap flex-column'>Add Workout  {date ? new Date(date).toLocaleDateString() : ""}</h2>
          <div>
            <label for='sets' className='form-label'><b>Date:</b></label>
            <input id='sets' className='form-control' type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <br />
          <div>
            <label for='name' className='form-label'><b>Workout Name:</b></label>
            {/* <input id='name' className='form-control' type="text" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} required /> */}
            <select id='name' className='form-control' required value={workoutName} onChange={(e) => setWorkoutName(e.target.value)}>
              <option value="">Select Exercise</option>
              <option value="Chest">Chest</option>
              <option value="Back">Back</option>
              <option value="Hamstrings">Hamstrings</option>
              <option value="Quads">Quads</option>
              <option value="Triceps">Triceps</option>
              <option value="Biceps">Biceps</option>
              <option value="Shoulders">Shoulders</option>
            </select>
          </div>
          <br />
          <h5>Exercises</h5>
          {exercises.map((exercise, index) => (
            <div key={index}>
              <input
                type="text"
                name="exerciseName"
                placeholder="Exercise Name"
                value={exercise.exerciseName}
                onChange={(e) => handleExerciseChange(index, e)}
                required
                className='form-control'
              />
              <br />
              <input
                type="number"
                name="sets"
                placeholder="Sets"
                value={exercise.sets}
                onChange={(e) => handleExerciseChange(index, e)}
                required
                className='form-control'
              />
              <br />
              <input
                type="number"
                name="reps"
                placeholder="Reps"
                value={exercise.reps}
                onChange={(e) => handleExerciseChange(index, e)}
                required
                className='form-control'
              />
              <br />
              <input
                type="number"
                name="weight"
                placeholder="Weight"
                value={exercise.weight}
                onChange={(e) => handleExerciseChange(index, e)}
                className='form-control'
                required
              />
              <br />
              <button type="button" className='btn btn-danger' onClick={() => handleRemoveExercise(index)}>Remove</button>
              <br />
              <br />
            </div>
          ))}
          <br />
          <div className='d-flex justify-content-center align-items-center'>
            <button type="button" className='btn btn-success' onClick={handleAddExercise}>Add Exercise</button>
            <button type="submit" className='btn btn-success'>Submit Workout</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default WorkoutTodo;
