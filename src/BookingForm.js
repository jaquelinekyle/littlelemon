import React, { useState } from 'react';
import './Booking.css';

function BookingForm({ availableTimes, dispatch }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests]  = useState('');
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: 'UPDATE', date: newDate }); // Fetch available times for the selected date
  };

  const handleGuestChange = (e) => {
    const guests = e.target.value;
    setGuests(guests);
  };

  const handleOccasionChange = (e) => {
    const occasion = e.target.value;
    setOccasion(occasion);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5%',
      }}
    >
      <form>
        <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" onChange={handleGuestChange}/>
        
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChange}>
      <option></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
        <div className='btn'>
      <input type="submit" value="Make Your Reservation" />
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
