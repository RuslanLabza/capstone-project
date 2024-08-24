import './Footer.css';
import logo from '../../assets/images/Logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className='container footer-container'>
      <img src={logo} alt="lemon rest" />
      <div>
        <h4>Doormat Navigation</h4>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order online</a>
            </li>
            <li>
              <a href="#">Login</a>
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
