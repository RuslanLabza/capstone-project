const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const bookingByDate = [];

export const store = () => {
  if (!window.localStorage.getItem('bookingByDate')) {
    window.localStorage.setItem('bookingByDate', JSON.stringify(bookingByDate));
  }
};

export const fetchAPI = async (date) => {
  const storedBookings = localStorage.getItem('bookingByDate');
  const bookingByDate = storedBookings ? JSON.parse(storedBookings) : [];

  const booked = bookingByDate.filter((b) => {
    console.log(b.date, 'b.date:', date);
    return b.date === date;
  });
  if (booked.length !== 0) {
    const booking = availableTimes.filter((d) => !booked[0].booked.includes(d));
    console.log(booking);
    return booking;
  }

  return availableTimes;
};

export const submitAPI = async (formData) => {
  console.log(formData);
  const date = formData.date;
  const time = formData.time;
  const storedBookings = localStorage.getItem('bookingByDate');
  const bookingByDate = storedBookings ? JSON.parse(storedBookings) : [];

  const isBooked =
    bookingByDate.filter((d) => d.booked.includes(time) && d.date === date)
      .length !== 0;

  const isDateExist = bookingByDate.filter((d) => d.date === date).length !== 0;

  if (isBooked) {
    return false;
  }

  if (isDateExist) {
    const newBooking = bookingByDate.filter((d) => d.date === date);
    localStorage.setItem(
      'bookingByDate',
      JSON.stringify([
        ...bookingByDate.filter((d) => d.date !== date),
        { ...newBooking[0], booked: [...newBooking[0].booked, time] },
      ])
    );
    return true;
  }

  localStorage.setItem(
    'bookingByDate',
    JSON.stringify([...bookingByDate, { date: date, booked: [time] }])
  );

  return true;
};
