import BookingForm from './BookingForm';
import './Booking.css';

function BookingPage({ availableTimes, dispatch, setSelectedDate, setGuests, setOccasion, setSelectedTime }) {
  return (
    <div className='center-content'>
      <h1>Book Your Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        setSelectedDate={setSelectedDate}
        setGuests={setGuests}
        setOccasion={setOccasion}
        setSelectedTime={setSelectedTime} // Pass this to BookingForm
      />
    </div>
  );
}

export default BookingPage;
