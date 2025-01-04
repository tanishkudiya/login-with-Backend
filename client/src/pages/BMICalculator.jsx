import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { red } from '@mui/material/colors';
import "../styles/style.css";
import Layout from '../components/layout/layout';

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [bmi, setBMI] = useState(null);
    const [workoutSuggestion, setWorkoutSuggestion] = useState('');


    const calculateBMI = () => {
        if (weight && feet && inches !== null) {
            // Convert feet and inches to height in meters
            const totalInches = (parseInt(feet) * 12) + parseInt(inches);
            const heightInMeters = totalInches * 0.0254;

            // Calculate BMI
            const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
            setBMI(bmiValue);

            // Set workout suggestion based on BMI
            if (bmiValue < 18.5) {
                setWorkoutSuggestion('Underweight. Consider strength training and weight gain exercises.');
            } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
                setWorkoutSuggestion('Healthy weight. Maintain your current workout routine.');
            } else if (bmiValue >= 25 && bmiValue <= 29.9) {
                setWorkoutSuggestion('Overweight. Focus on cardio and strength training to lose weight.');
            } else {
                setWorkoutSuggestion('Obese. Consult a healthcare professional for personalized guidance.');
            }
        } else {
            alert('Please enter all fields to calculate your BMI.');
        }
    };
    

    return (

        <Layout>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <div className='bmi p-3'>
                    <h2 className='d-flex justify-content-center align-items-center mt-4'>BMI Calculator</h2>
                    <label for='weighting' className='form-label'><b> Weight (kg):</b></label>
                    <input id="weighting" required className='form-control' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <br />
                    <div className="d-flex gap-2">
                        <div>
                    <label for='feet' className='form-label'><b> height(feet):</b></label> 
                        <input
                            className='form-control'
                            type="number"
                            id='feet'
                            value={feet}
                            onChange={(e) => setFeet(e.target.value)}
                            placeholder="Feet"
                        />
                        </div>
                        
                        <div>
                    <label for='inches' className='form-label'><b>Inches </b></label>
                        <input
                            className='form-control'
                            type="number"
                            id='inches'
                            value={inches}
                            onChange={(e) => setInches(e.target.value)}
                            placeholder="Inches"
                        />
                        </div>
                    </div>
                    <br />
                    <button className='btn btn-success col-12' onClick={calculateBMI}>Calculate BMI</button>
                    <br />
                    <br />
                    <p>Your BMI: <b>{bmi}</b></p>
                    <p>Workout Suggestion: <b>{workoutSuggestion}</b></p>
                </div>
            </div>
        </Layout>
    );
}

export default BMICalculator;