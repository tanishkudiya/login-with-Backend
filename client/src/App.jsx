import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Signup'
import Login from './Login'
import Home from './pages/home'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './pages/menu'
import Contact from './pages/contact'
import About from './pages/about'
import HomeLogin from './pages/homelogin'
// import Workout from './pages/workout'
import Calendar from './pages/calendar'
import Combine from './pages/combine'
import WorkoutList from './pages/WorkoutList'
import WorkoutTodo from './pages/WorkoutTodo'
import FoodSearch from './pages/FoodSearch'
import UserProfile from './pages/UserProfile'
import BMICalculator from './pages/BMICalculator'
// import Calendar from './pages/calendar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomeLogin/>}></Route> */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Signup />}></Route>
        {/* <Route path='/menu' element={<Menu />}></Route> */}
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/workout-list' element={<WorkoutList />}></Route>
        <Route path='/workout-todo' element={<WorkoutTodo/>}></Route>
        <Route path='/userprofile' element={<UserProfile/>}></Route>
        <Route path='/bmi' element={<BMICalculator/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
