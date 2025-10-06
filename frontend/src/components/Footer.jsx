import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>
            © 2025 IMSpectrum.  {' '}
            <Link to="/about" className="about-link">
              Developed by Siffat Khan.
            </Link>
          </p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/siffatkhan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/siffat-khan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* <a href="https://instagram.com/sifat_kk9" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a> */}

        </div>

        <div className="footer-disclaimer">
          {/* <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a> */}
            <p>
              Disclaimer: This is my own personal work and is not officially associated 
              to or endorsed by the IMSciences or any other institution.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
