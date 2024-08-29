export default function maxValidator(value, max) {
  if (value >= max) {
    return 'Guests must be less than ' + max;
  }
  return null;
}
