import logo from "../assets/images/Logo .svg"

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="lemon rest"/>
            <div>
                <h4>Doormat Navigation</h4>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Menu</a></li>
                        <li><a href='#'>Reservations</a></li>
                        <li><a href='#'>Order online</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4>Social media links</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
  }