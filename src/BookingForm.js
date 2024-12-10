import './Booking.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, setSelectedDate, setSelectedTime, setGuests, setOccasion }) {
  const [errors, setErrors] = useState({}); // State to track validation errors

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: 'UPDATE', date: newDate }); // Fetch available times for the selected date
  };

  const handleGuestChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const dateField = document.getElementById("res-date").value;
    const timeField = document.getElementById("time").value;
    const guestField = document.getElementById("guests").value;

    if (!dateField) {
      newErrors.date = "Date is required.";
    }
    if (!timeField) {
      newErrors.time = "Time is required.";
    }
    if (!guestField || guestField <= 0) {
      newErrors.guests = "Number of guests must be at least 1.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      navigate("/confirmed");
    } else {
      console.log("Form validation failed", errors);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '5%' }} role="form" aria-label="Booking Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          aria-label="Choose date"
          onChange={handleDateChange}
        />
        {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

        <label htmlFor="time">Choose time</label>
        <select id="time"  aria-label="Choose time" onChange={handleTimeChange}>
          <option value="">Select a time</option> {/* Default option */}
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}

        <label htmlFor="guests">Number of guests</label>
        <input type="number" aria-label="Number of guests" id="guests" min="1" max="10" onChange={handleGuestChange} />
        {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" aria-label="Occasion (optional)" onChange={handleOccasionChange}>
          <option value="">Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <div className="btn">
          <input type="submit" value="Make Your Reservation" aria-label="Submit reservation" />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
