import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Premium Iron Store</h3>
          <p>Your trusted source for quality iron products since 2008.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Anaz Mandi Singla Iron Store, Patran</p>
          <p>Phone: +91 83605-29428, +91 70095-04630</p>
          <p>Email: sohitsingla031@gmail.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Premium Iron Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;