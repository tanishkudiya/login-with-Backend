import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { red } from '@mui/material/colors';
import "../styles/style.css";

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [workoutSuggestion, setWorkoutSuggestion] = useState('');

    const calculateBMI = () => {
        const calculatedBMI = (weight / (height * 0.0254) ** 2);
        setBMI(calculatedBMI.toFixed(2));

        // Set workout suggestion based on BMI
        if (bmi < 18.5) {
            setWorkoutSuggestion('Underweight. Consider strength training and weight gain exercises.');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setWorkoutSuggestion('Healthy weight. Maintain your current workout routine.');
        } else if (bmi >= 25 && bmi <= 29.9) {
            setWorkoutSuggestion('Overweight. Focus on cardio and strength training to lose weight.');
        } else {
            setWorkoutSuggestion('Obese. Consult a healthcare professional for personalized guidance.');
        }
    };

    return (

        <div className='bmi p-3'>
                <h2 className='d-flex justify-content-center align-items-center mt-4'>BMI Calculator</h2>
                <label for='weighting' className='form-label'><b> Weight (kg):</b></label>
                <input id="weighting" required className='form-control' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <br />
                <label for="height" className='form-label'><b>Height (inches):</b></label>
                <input id='height' required className='form-control' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                <br />
                <button className='btn btn-success col-12' onClick={calculateBMI}>Calculate BMI</button>
                <br />
                <br />
                <p>Your BMI: <b>{bmi}</b></p>
                <p>Workout Suggestion: <b>{workoutSuggestion}</b></p>
        </div>
    );
}

export default BMICalculator;