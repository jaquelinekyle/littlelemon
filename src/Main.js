import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useReducer } from 'react';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Footer from './Footer';

// Reducer function for managing available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return fetchAPI(new Date(action.date)); // Fetch new times for the selected date
    default:
      return state;
  }
};


// Initialize available times (empty at the start)
const initializeTimes = () => {
  return [];
};

function fetchAPI(date) {
  console.log('Fetching available times for:', date);
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Mocked response
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
