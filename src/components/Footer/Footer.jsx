import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-section">
          <h2>Andhra Polytechnic</h2>
          <p>
            Empowering students with knowledge, skills,
            and opportunities for a successful future.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About</li>
            <li onClick={() => navigate('/events')}>Events</li>
            <li onClick={() => navigate('/registration')}>Registration</li>
            <li onClick={() => navigate('/help')}>Help</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Kakinada, Andhra Pradesh</p>
          <p>Andhra Pradesh, India</p>
          <p>Email: info@andhrapolytechnic.ac.in</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 Andhra Polytechnic. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;