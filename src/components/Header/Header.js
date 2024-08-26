import './Header.css';
import Nav from './Nav';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#">
          <img src={logo} alt="little lemon logo"></img>
        </a>
        <Nav />
      </div>
    </header>
  );
}
