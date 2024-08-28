import { useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Reservation confirmed</h1>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Return to Previous Page
      </button>
    </div>
  );
}
