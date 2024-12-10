import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useReducer } from 'react';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';

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
  return ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM']; 
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState('');



  console.log("Main Component State:");
  console.log("Selected date:", selectedDate);
  console.log("Guests:", guests);
  console.log("Occasion:", occasion);
  console.log("Time", selectedTime); 


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              setSelectedDate={setSelectedDate}
              setGuests={setGuests}
              setOccasion={setOccasion}
              setSelectedTime={setSelectedTime}
            />
          }
        />
        <Route
          path="/confirmed"
          element={
            <ConfirmedBooking
              selectedDate={selectedDate}
              guests={guests}
              occasion={occasion}
              selectedTime={selectedTime}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
