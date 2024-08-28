import React from 'react';
import { useState } from 'react';
import './ReservationForm.css';

export default function ReservationForm({
  availableTimes,
  dispatchAvailableTimes,
}) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `date: ${date}; time: ${time}; guests: ${guests}; occasion: ${occasion}`
    );
    clearForm();
  };

  const clearForm = () => {
    setDate('');
    setTime('17:00');
    setGuests(1);
    setOccasion('role');
  };

  return (
    <>
      <h1>Book Now</h1>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        data-testid="reservation-form"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              dispatchAvailableTimes(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((availableTime) => (
              <option value={availableTime} key={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value={'birthday'}>Birthday</option>
            <option value={'anniversary'}>Anniversary</option>
          </select>
        </div>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
}
