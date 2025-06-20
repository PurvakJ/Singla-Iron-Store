import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Singla Iron Store</Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
