import { Link } from 'react-router-dom';
import './LinkButton.css';

export default function LinkButton({ children, ...props }) {
  return (
    <Link className="link-button" {...props}>
      {children}
    </Link>
  );
}
