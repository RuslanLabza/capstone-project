import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the correct expected value', () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  expect(result).toContain('17:00');
  expect(result).toContain('18:00');
  expect(result).toContain('19:00');
  expect(result).toContain('20:00');
  expect(result).toContain('21:00');
  expect(result).toContain('22:00');
});

test('updateTimes returns the same value provided in the state', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2023-04-20' };

  const result = updateTimes(currentState, action);

  expect(result).toEqual(currentState);
});
