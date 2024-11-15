// services/auth.js
import axios from 'axios';

export const login = async (username, password) => {
  const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (username, password) => {
  const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
  return response.data;
};

export const saveWorkout = async (workout) => {
  const token = localStorage.getItem('token');
  await axios.post('http://localhost:5000/api/auth/workout', workout, {
    headers: { Authorization: token },
  });
};
