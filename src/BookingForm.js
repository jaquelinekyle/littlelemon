import React, { useState } from 'react';
import './index.css';

function BookingForm({ availableTimes, dispatch }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: 'UPDATE', date: newDate }); // Fetch available times for the selected date
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
        paddingBottom: '5%',
      }}
    >
      <form
        style={{
          display: 'grid',
          maxWidth: '300px',
          gap: '5px',
        }}
      >
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
      <input type="number" id="guests" min="1" max="10" />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
      <option></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
    </div>
  );
};

export default BookingForm;
