export default function requiredValidator(value) {
    if (!value) {
      return 'Field is required';
    }
    return null;
  };