import './Footer.css';
import logo from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <img src={logo} alt="Little Lemon restaurant logo" />
        <nav aria-label="Footer Navigation">
          <h4>Doormat Navigation</h4>
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
        <div>
          <h4>Contact</h4>
          <address>
            <ul>
              <li>
                <a
                  href="https://goo.gl/maps/123MainStreet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  123 Main Street, Chicago, IL 60601
                </a>
              </li>
              <li>
                <a href="tel:+13125551234">+1 (312) 555-1234</a>
              </li>
              <li>
                <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
              </li>
            </ul>
          </address>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <a
                href="https://facebook.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter profile"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
