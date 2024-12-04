import './index.css';

function Footer() {
    return (
      <>
        <footer className="footer">
      <div className="footer-grid">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/little_lemon_logo.jpg" alt="Little Lemon Logo" />
        </div>
        {/* Doormat Navigation */}
        <div className="footer-column">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="booking">RESERVATIONS</a></li>
            <li><a href="#order-online">ORDER ONLINE</a></li>
            <li><a href="#login">LOGIN</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Address: 123 Lemon Lane</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-column">
          <h3>Social Media Links</h3>
          <p>Facebook: @LittleLemon</p>
          <p>Instagram: @LittleLemon</p>
          <p>Twitter: @LittleLemon</p>
        </div>
      </div>
    </footer>

      </>
    );
  }
  export default Footer;