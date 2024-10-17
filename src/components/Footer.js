const Footer = () => {
    return (
      <div className="footer">
        <div className="copy-right-container">
          ©️ All rights reserved to Rasmiya Rahmath
        </div>
        <div className="links-container">
          <div className="links">
            <ul>
              <li><b>Company</b></li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="contact-us">
            <ul>
              <li><b>Contact Us</b></li>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
            <ul>
            <li><b>Legal</b></li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
            </ul>
          </div>
          <div className="city-container">
          <ul>
            <li><b>We deliver to:</b></li>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          </div>
        </div>
      </div>
    )
}

export default Footer;