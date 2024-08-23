import './Header.css';
import Nav from './Nav';
import logo from '../../assets/images/Logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <a href="#">
        <img src={logo} alt="little lemon logo"></img>
      </a>
      <Nav />
    </header>
  );
}
