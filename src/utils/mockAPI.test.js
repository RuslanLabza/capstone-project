import { fetchAPI, submitAPI, initializeTimes, updateTimes } from './mockAPI';

describe('mockAPI', () => {
  beforeEach(() => {
    // Reset the localStorage before each test
    localStorage.clear();
  });

  test('fetchAPI returns an array of available times', async () => {
    const date = '2023-06-01';
    const result = await fetchAPI(date);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    result.forEach((time) => {
      expect(typeof time).toBe('string');
      expect(time).toMatch(/^\d{2}:\d{2}$/);
    });
  });

  test('submitAPI returns true for successful submission', async () => {
    const formData = {
      date: '2023-06-01',
      time: '18:00',
      guests: 2,
      occasion: 'birthday',
    };
    const result = await submitAPI(formData);
    expect(result).toBe(true);
  });
});
