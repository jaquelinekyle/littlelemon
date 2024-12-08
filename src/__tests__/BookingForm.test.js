import { render, screen } from "@testing-library/react";
import BookingForm from '../BookingForm';

test('Renders the BookingForm heading', () => {
  // Render the component
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  
  // Find the heading or label by its text
  const headingElement = screen.getByText("Choose date");
  
  // Assert that the heading is present in the document
  expect(headingElement).toBeInTheDocument();
});
