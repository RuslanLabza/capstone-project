import './Footer.css';
import logo from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <img src={logo} alt="lemon rest" />
        <div>
          <h4>Doormat Navigation</h4>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/reservations">Reservations</NavLink>
              </li>
              <li>
                <NavLink to="/order">Order online</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">Address</a>
            </li>
            <li>
              <a href="#">Phone number</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
