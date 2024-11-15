import React, { useState } from 'react';
import moment from 'moment';
import "../styles/style.css"


function StreakWorkout({workouts}) {
  // const [totalSubmissions, setTotalSubmissions] = useState(0);
  // const [activeDays, setActiveDays] = useState(0);
  // const [maxStreak, setMaxStreak] = useState(0);
  // const [currentStreak, setCurrentStreak] = useState(0);

  
  const calculateTotalSubmissions = (workouts) => workouts.length;
  
  const calculateActiveDays = (workouts) => {
    const uniqueDates = new Set(workouts.map((workout) => workout.date));
    return uniqueDates.size;
  };

  const calculateMaxStreak = (workouts) => {
    let currentStreak = 0;
    let maxStreak = 0;
    
    workouts.forEach((workout, index) => {
      if (index === 0 || moment(workout.date).diff(moment(workouts[index - 1].date), 'days') === 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
      
      maxStreak = Math.max(maxStreak, currentStreak);
    });
  };
  
  const calculateCurrentStreak = (workouts) => {
    if(workouts.length === 0){
      return 0;
    }
    const mostRecentWorkoutDate = moment(workouts[workouts.length - 1].date);
    let currentStreak = 0;

    for (let i = workouts.length - 1; i >= 0; i--) {
      const workoutDate = moment(workouts[i].date);
      if (workoutDate.isSame(mostRecentWorkoutDate.subtract(currentStreak, 'days'), 'day')) {
        currentStreak++;
      } else {
        break;
      }
    }
  };
  const totalSubmissions = calculateTotalSubmissions(workouts);
  const activeDays = calculateActiveDays(workouts);
  const maxStreak = calculateMaxStreak(workouts);
  const currentStreak = calculateCurrentStreak(workouts);
  
  const renderStreakGrid = () => {
    const grid = [];
    const currentDate = moment();
    const oneWeekAgo = currentDate.clone().subtract(7, 'days'); // Start from 7 days ago
  
    // Loop through the past week (7 days)
    for (let i = 0; i < 7; i++) {
      const day = oneWeekAgo.clone().add(i, 'days');
      let hasWorkout = false; // Initialize hasWorkout for this day
  
      // Check if there's a workout on this day or within the previous 6 days
      for (let j = 0; j <= 6; j++) {
        const checkDay = day.clone().subtract(j, 'days');
        if (workouts.some((workout) => moment(workout.date).isSame(checkDay, 'day'))) {
          hasWorkout = true;
          break; // Stop checking if a workout is found
        }
      }
  
      // Set the color based on the presence of a workout within the 7-day window
      grid.push(hasWorkout ? 'green' : 'gray');
    }
  
    return grid.map((color, index) => (
      <div key={index} className={`streak-square ${color}`}></div>
    ));
  };

  return (
    <div className="streak-container">
      <p>Total submissions: {totalSubmissions}</p>
      <p>Total active days: {activeDays}</p>
      <p>Max streak: {maxStreak}</p>
      <p>Curr streak: {currentStreak}</p>
      <div className="streak-grid d-flex justify-content-center align-items-center">
        {renderStreakGrid()}
      </div>
    </div>
  );
}

export default StreakWorkout;