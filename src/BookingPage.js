import React from 'react';
import BookingForm from './BookingForm';
import './index.css';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className='center-content'>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;
