export default function validateInput(...args) {
  const errors = [];
  args.forEach((error) => {
    if (error) {
      errors.push(error);
    }
  });
  return errors;
}
