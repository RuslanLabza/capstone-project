export default function minValidator(value, min) {
    if (value <= min) {
      return 'Guests must be more than ' + min;
    }
    return null;
  };