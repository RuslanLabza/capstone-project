import './Main.css';
import { Suspense, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ReservationsPage from '../../pages/ReservationsPage ';
import AboutPage from '../../pages/AboutPage';
import MenuPage from '../../pages/MenuPage';
import OrderPage from '../../pages/OrderPage';
import LoginPage from '../../pages/LoginPage';

export function updateTimes(state, action) {
  return state;
}

export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export default function Main() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <main className="main">
      <Suspense fallback={<div style={{ marginTop: '100px' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route
            path="/reservations"
            element={
              <ReservationsPage
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
              />
            }
          />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </main>
  );
}
