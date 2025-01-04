import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/addstyle.css"
import Layout from '../components/layout/layout';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const location = useLocation();

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      date: params.get('date'),
    };
  };

  const { date } = getQueryParams();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/workouts`);
        const data = await response.json();
        setWorkouts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDeleteWorkout = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/workouts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error deleting workout: ${error.message}`);
      }

      // Remove the workout from the state
      setWorkouts(workouts.filter(workout => workout._id !== id));
      alert('Workout deleted successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className='addworkout d-flex justify-content-center align-items-center flex-column flex-wrap'>
        <h2 className='d-flex justify-content-center align-items-center flex-wrap'>Workout Summary</h2>
        <ul className='d-flex justify-content-center align-items-center flex-wrap'>
          {workouts.map((workout) => (
            <li className='workout' key={workout._id}>
              <p className='d-flex justify-content-center align-items-center'>{workout.date}</p>
              <h3>{workout.name}</h3>
              <h5>Exercises:</h5>
              <ul>
                {workout.exercises.map((exercise, index) => (
                  <li key={index}>
                    <p><b>Exercise:</b> {exercise.exerciseName}</p>
                    <p><b>Sets:</b> {exercise.sets}</p>
                    <p><b>Reps:</b> {exercise.reps}</p>
                    <p><b>Weight:</b> {exercise.weight} kg</p>
                  </li>
                ))}
              </ul>
              <button className='btn btn-danger d-flex justify-content-center align-items-center' onClick={() => handleDeleteWorkout(workout._id)}><DeleteOutlineTwoToneIcon/>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default WorkoutList;
