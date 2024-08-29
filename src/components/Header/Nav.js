import './Nav.css';
import burgerIcon from '../../assets/images/icon _hamburger_menu.svg';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <button
        className="burger-menu-button"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        aria-label="Toggle navigation menu"
      >
        <img
          className="burger-menu-icon"
          src={burgerIcon}
          alt=""
          aria-hidden="true"
        />
      </button>
      <nav
        ref={navRef}
        className={`nav ${menuOpen ? 'show' : ''}`}
        id="nav-menu"
        aria-label="Main navigation"
      >
        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" onClick={() => setMenuOpen(false)}>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" onClick={() => setMenuOpen(false)}>
              Order online
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
