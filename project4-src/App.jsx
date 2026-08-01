import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import ReservationsPage from './pages/ReservationsPage';



function App() {
  return (
    <Router>
      <MenuPage />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />

      </Routes>
    </Router>
  )
  
}

export default App;
