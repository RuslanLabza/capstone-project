export default function dateValidator(value) {
  const inputDate = new Date(value);
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(currentDate.getDate() - 1);

  if (inputDate < currentDate) {
    return 'Date is in the past, choose today or a future date';
  }
  return null;
}
