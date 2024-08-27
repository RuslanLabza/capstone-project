import './Main.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ReservationsPage from '../../pages/ReservationsPage ';
import AboutPage from '../../pages/AboutPage';
import MenuPage from '../../pages/MenuPage';
import OrderPage from '../../pages/OrderPage';
import LoginPage from '../../pages/LoginPage';
import { Suspense } from 'react';

export default function Main() {
  return (
    <main className="main">
      <Suspense fallback={<div style={{ marginTop: '100px' }}>Loading...</div>}>
        {' '}
        //Lazy loading
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </main>
  );
}
