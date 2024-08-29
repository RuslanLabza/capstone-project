import ReservationForm from '../components/ReservationForm/ReservationForm';

export default function ReservationsPage({ ...props }) {
  return (
    <div>
      <ReservationForm {...props} />
      <section aria-labelledby="available-hours-title">
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
