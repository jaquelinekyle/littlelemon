import { initializeTimes } from '../Main';
import { updateTimes } from '../Main';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "../Main";

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));


test('Renders the Main component with routes', () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial state', () => {
  // Call initializeTimes function
  const result = initializeTimes();

  // Assert the expected times are returned
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state for any date', () => {
    // Initial state
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
    // Action object (for now, date doesn't affect the result)
    const action = { type: 'UPDATE', date: '2023-12-01' };
  
    // Call updateTimes
    const result = updateTimes(initialState, action);
  
    // Assert that the state remains unchanged
    expect(result).toEqual(initialState);
  });