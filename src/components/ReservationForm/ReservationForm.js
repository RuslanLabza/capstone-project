import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './ReservationForm.css';
import { fetchAPI } from '../../utils/mockAPI';
import formatDate from '../../utils/formatDate';
import validateInput from '../../utils/validators/validateInput';
import requiredValidator from '../../utils/validators/requiredValidator';
import minValidator from '../../utils/validators/minValidator';
import maxValidator from '../../utils/validators/maxValidator';
import dateValidator from '../../utils/validators/dateValidator';

export default function ReservationForm({
  availableTimes,
  dispatchAvailableTimes,
  submitForm,
}) {
  const [date, setDate] = useState({
    value: formatDate(new Date()),
    touched: false,
    errors: [],
  });
  const [guests, setGuests] = useState({
    value: 1,
    touched: false,
    errors: [],
  });
  const [occasion, setOccasion] = useState({
    value: 'birthday',
    touched: false,
    errors: [],
  });
  const [time, setTime] = useState({
    value: '',
    touched: false,
    errors: validateInput(requiredValidator('')),
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const getAvailableTimes = async () => {
      const data = await fetchAPI(date.value);
      dispatchAvailableTimes(data);
      if (Array.isArray(data) && data.length > 0) {
        setTime((time) => ({
          ...time,
          value: data[0],
          errors: validateInput(requiredValidator(data[0])),
        }));
      } else {
        console.error('No available times received');
      }
    };

    getAvailableTimes();
  }, [date, dispatchAvailableTimes]);

  const isFormValid = useCallback(() => {
    return (
      date.errors.length === 0 &&
      time.errors.length === 0 &&
      guests.errors.length === 0 &&
      occasion.errors.length === 0
    );
  }, [date, time, guests, occasion]);

  const showErrors = (errors) => {
    return errors.map((error) => (
      <p key={error} className="error-message" role="alert">
        {error}
      </p>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (isFormValid()) {
      submitForm(
        {
          date: date.value,
          time: time.value,
          guests: guests.value,
          occasion: occasion.value,
        },
        clearForm
      );
    } else {
      setTime((time) => ({
        ...time,
        errors: validateInput(requiredValidator(time.value)),
      }));
    }
  };

  const clearForm = () => {
    setTime({ value: '', touched: false, errors: [] });
    setDate({ value: formatDate(new Date()), touched: false, errors: [] });
    setGuests({ value: 1, touched: false, errors: [] });
    setOccasion({ value: 'birthday', touched: false, errors: [] });
  };

  return (
    <>
      <h2 id="reservation-form-title">Book Now</h2>
      <form
        style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        data-testid="reservation-form"
        onSubmit={handleSubmit}
        aria-labelledby="reservation-form-title"
      >
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="res-date"
            value={date.value}
            onChange={(e) =>
              setDate({
                value: e.target.value,
                touched: true,
                errors: validateInput(
                  requiredValidator(e.target.value),
                  dateValidator(e.target.value)
                ),
              })
            }
            required
            aria-invalid={date.errors.length > 0}
            aria-describedby="date-error"
          />
          {date.touched || isSubmitted ? showErrors(date.errors) : null}
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="res-time"
            value={time.value}
            onChange={(e) =>
              setTime({
                value: e.target.value,
                touched: true,
                errors: validateInput(requiredValidator(e.target.value)),
              })
            }
            required
            aria-invalid={time.errors.length > 0}
            aria-describedby="time-error"
          >
            {availableTimes.map((availableTime) => (
              <option value={availableTime} key={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
          {time.touched || isSubmitted ? showErrors(time.errors) : null}
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={guests.value}
            onChange={(e) =>
              setGuests({
                value: e.target.value,
                touched: true,
                errors: validateInput(
                  requiredValidator(e.target.value),
                  minValidator(e.target.value, 1),
                  maxValidator(e.target.value, 10)
                ),
              })
            }
            required
            aria-invalid={guests.errors.length > 0}
            aria-describedby="guests-error"
          />
          {guests.touched || isSubmitted ? showErrors(guests.errors) : null}
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion.value}
            onChange={(e) =>
              setOccasion({
                value: e.target.value,
                touched: true,
                errors: validateInput(requiredValidator(e.target.value)),
              })
            }
            required
            aria-invalid={occasion.errors.length > 0}
            aria-describedby="occasion-error"
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
          {occasion.touched || isSubmitted ? showErrors(occasion.errors) : null}
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          aria-disabled={!isFormValid()}
        >
          Make Your reservation
        </button>
      </form>
    </>
  );
}
