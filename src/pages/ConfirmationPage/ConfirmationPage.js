import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <section className="confirmation-page" aria-labelledby="confirmation-title">
        <h1 id="confirmation-title">Reservation Confirmed</h1>
        <p>Thank you for your reservation. We look forward to seeing you!</p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
          aria-label="Return to previous page"
        >
          Return to Previous Page
        </button>
      </section>
    </div>
  );
}
