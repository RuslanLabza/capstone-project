import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from './ReservationForm';

describe('ReservationForm', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatchAvailableTimes = jest.fn();

  beforeEach(() => {
    render(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        dispatchAvailableTimes={mockDispatchAvailableTimes}
      />
    );
  });

  test('renders the BookingForm heading', () => {
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders all form elements', () => {
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  test('updates date when changed', () => {
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-04-01' } });
    expect(dateInput.value).toBe('2023-04-01');
    expect(mockDispatchAvailableTimes).toHaveBeenCalled();
  });

  test('updates time when changed', () => {
    const timeSelect = screen.getByLabelText('Choose time');
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    expect(timeSelect.value).toBe('18:00');
  });

  test('updates number of guests when changed', () => {
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.value).toBe('5');
  });

  test('updates occasion when changed', () => {
    const occasionSelect = screen.getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'anniversary' } });
    expect(occasionSelect.value).toBe('anniversary');
  });

  describe('Form Validation', () => {
    test('displays error for invalid date', () => {
      const dateInput = screen.getByLabelText('Choose date');
      const submitButton = screen.getByText('Make Your reservation');

      fireEvent.change(dateInput, { target: { value: '2024-08-20' } });
      fireEvent.click(submitButton);

      expect(
        screen.getByText('Date is in the past, choose today or a future date')
      ).toBeInTheDocument();
    });

    test('displays error for invalid time', () => {
      const timeSelect = screen.getByLabelText('Choose time');
      const submitButton = screen.getByText('Make Your reservation');

      fireEvent.change(timeSelect, { target: { value: '' } });
      fireEvent.click(submitButton);

      expect(screen.getByText('Field is required')).toBeInTheDocument();
    });

    test('displays error for guests less than 1', () => {
      const guestsInput = screen.getByLabelText('Number of guests');
      const submitButton = screen.getByText('Make Your reservation');

      fireEvent.change(guestsInput, { target: { value: 0 } });
      fireEvent.click(submitButton);

      expect(
        screen.getByText('Guests must be more than 1')
      ).toBeInTheDocument();
    });

    test('displays error for guests more than 10', () => {
      const guestsInput = screen.getByLabelText('Number of guests');
      const submitButton = screen.getByText('Make Your reservation');

      fireEvent.change(guestsInput, { target: { value: 12 } });
      fireEvent.click(submitButton);

      expect(
        screen.getByText('Guests must be less than 10')
      ).toBeInTheDocument();
    });

    test('displays error for missing occasion', () => {
      const occasionSelect = screen.getByLabelText('Occasion');
      const submitButton = screen.getByText('Make Your reservation');

      fireEvent.change(occasionSelect, { target: { value: '' } });
      fireEvent.click(submitButton);

      expect(screen.getByText('Field is required')).toBeInTheDocument();
    });
  });
});
