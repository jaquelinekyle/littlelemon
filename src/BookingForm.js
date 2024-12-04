import React, { useState } from 'react';
import './index.css';
  

const BookingForm = () => {
  // Define state for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Define state for available times
  const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      date,
      time,
      guests,
      occasion,
    });
    alert('Reservation submitted!');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          maxWidth: '300px',
          gap: '10px',
        }}
      >
        {/* Date Field */}
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)} // Update state
        />

        {/* Time Field */}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)} // Update state
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        {/* Guests Field */}
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)} // Update state
        />

        {/* Occasion Field */}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)} // Update state
        >
          <option value="" disabled>Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {/* Submit Button */}
        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
