import ReservationForm from '../components/ReservationForm/ReservationForm';

export default function ReservationPage({ ...props }) {
  return (
    <div>
      <ReservationForm {...props} />
      <h2>Available Hours</h2>
      <table className="available-hours-table">
        <thead>
          <tr>
            <th>Time</th>
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
    </div>
  );
}
