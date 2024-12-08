import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className='center-content'>
      <h1 color='485E57'>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;
