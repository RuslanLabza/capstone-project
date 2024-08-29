import './Header.css';
import Nav from './Nav';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header-container">
        <a href="/" className="logo-link">
          <img className="logo" src={logo} alt="Little Lemon restaurant logo" />
        </a>
        <Nav />
      </div>
    </header>
  );
}
