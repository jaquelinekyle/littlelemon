import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Footer from './Footer';

function Main() {
  return (

  <Router>
  <Routes>
    <Route>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    </Route>
  </Routes>
  <Footer />
  </Router>
  );

}

export default Main;
