import './Booking.css';
import React from 'react';

function ConfirmedBooking({ selectedDate, guests, occasion, selectedTime }) {
    console.log("ConfirmedBooking Props:");
    console.log("Selected date:", selectedDate);
    console.log("Guests:", guests);
    console.log("Occasion:", occasion);
    console.log("Time:", selectedTime);

    const formattedOccasion = occasion || "A nice meal";

    const formattedDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString("en-US")
    : "Not provided";

  return (
    <div className='confirmation-box' style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Reservation Confirmed!</h2>
      <p>
        <strong>Date:</strong> {formattedDate}
      </p>
      <p>
        <strong>Time:</strong> {selectedTime || "Not provided"}
      </p>
      <p>
        <strong>Guests:</strong> {guests}
      </p>
      <p>
        <strong>Occasion:</strong> {formattedOccasion}
      </p>
      <h3>Thank you for booking with us!</h3>
      
    </div>
  );
}

export default ConfirmedBooking;
