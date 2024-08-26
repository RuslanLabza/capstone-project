import './Nav.css';
import burgerIcon from '../../assets/images/icon _hamburger_menu.svg';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((state => !state));
  };

  return (
    <>
      <button className='burger-menu-button' onClick={toggleMenu}>
        <img className='burger-menu-icon'src={burgerIcon} alt="Menu"/>
      </button>
      <nav className={`nav ${menuOpen ? 'show' : ''}`}>
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
      </>
  );
}
