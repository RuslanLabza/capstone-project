import './Nav.css';
import burgerIcon from '../../assets/images/icon _hamburger_menu.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <>
      <button className="burger-menu-button" onClick={toggleMenu}>
        <img className="burger-menu-icon" src={burgerIcon} alt="Menu" />
      </button>
      <nav className={`nav ${menuOpen ? 'show' : ''}`}>
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
    </>
  );
}
