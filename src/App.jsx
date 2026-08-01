import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteNavBar from './components/SiteNavbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';



export default function App() {
  return (
    <Router>
      <SiteNavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />

      </Routes>
    </Router>
  );
  
}


