import './ReservationsPage.css';
import ReservationForm from '../../components/ReservationForm/ReservationForm';

export default function ReservationsPage({ ...props }) {
  return (
    <div className="container reservations-page">
      <h1>Reserve a Table</h1>
      <ReservationForm {...props} />
      <section aria-labelledby="available-hours-title" className="available-hours-section">
        <h2 id="available-hours-title">Available Hours</h2>
        <table className="available-hours-table">
          <caption>List of available reservation times</caption>
          <thead>
            <tr>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {props.availableTimes.map((time) => (
              <tr key={time}>
                <td>{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
