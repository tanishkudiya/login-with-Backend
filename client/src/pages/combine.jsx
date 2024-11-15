import React from 'react';
import CalendarComponent from './calendar.jsx';
import Layout from '../components/layout/layout.jsx';
import BMICalculator from './BMICalculator.jsx';
// import StreakWorkout from './StreakWorkout.jsx';

function Combine() {
  return (
    <Layout>
      <div className='d-flex align-items-center justify-content-center flex-wrap'>
        <CalendarComponent />
        {/* <WorkoutList /> */}
        <BMICalculator />
        {/* <StreakWorkout/> */}
      </div>
    </Layout>
  );
}

export default Combine;