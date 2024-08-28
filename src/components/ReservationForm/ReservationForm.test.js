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

  test('submits form with correct data', () => {
    const submitMock = jest.fn();
    const form = screen.getByTestId('reservation-form');
    form.onsubmit = submitMock;

    fireEvent.change(screen.getByLabelText('Choose date'), {
      target: { value: '2023-04-01' },
    });
    fireEvent.change(screen.getByLabelText('Choose time'), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Anniversary' },
    });

    fireEvent.submit(form);

    expect(submitMock).toHaveBeenCalled();
  });
});
