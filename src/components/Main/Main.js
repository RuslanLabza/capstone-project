import './Main.css';
import { Suspense, useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ReservationsPage from '../../pages/ReservationsPage ';
import AboutPage from '../../pages/AboutPage';
import MenuPage from '../../pages/MenuPage';
import OrderPage from '../../pages/OrderPage';
import LoginPage from '../../pages/LoginPage';
import ConfirmationPage from '../../pages/ConfirmationPage';
import { submitAPI } from '../../utils/mockAPI';

export default function Main() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, []);

  const navigate = useNavigate();

  function updateTimes(state, action) {
    return action;
  }

  function submitForm(formData, clearForm) {
    submitAPI(formData).then((result) => {
      if (result) {
        navigate('/confirmation');
        clearForm();
      }
    });
  }

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
                submitForm={submitForm}
              />
            }
          />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </main>
  );
}
