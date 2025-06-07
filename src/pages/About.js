import React from 'react';
import './About.css';
import aboutImage from '../assets/haro-de-tave.avif';
import teamImage from '../assets/aata-machine.jpg';
import facilityImage from '../assets/car-washer.webp';
import qualityImage from '../assets/spare-partss.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Iron Works Legacy</h1>
          <p>15+ years of trusted quality in metal products and tools</p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-main">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="Our Iron Products" />
          </div>
          <div className="about-text">
            <h2>Our Humble Beginnings</h2>
            <p>
              Founded in 2008 by Master Craftsman Rajesh Singh, Premium Iron Store started as a small 
              workshop in Delhi with just three employees. What began as a local supplier for blacksmiths 
              has grown into one of North India's most respected iron product distributors.
            </p>
            <p>
              Through dedication to quality and customer service, we've expanded our operations to serve 
              industrial clients, construction firms, and individual craftsmen across five states.
            </p>
          </div>
        </div>

        {/* Quality Commitment Section */}
        <div className="quality-section">
          <div className="quality-content">
            <h2>Our Quality Commitment</h2>
            <div className="quality-features">
              <div className="quality-item">
                <img src={qualityImage} alt="Quality Materials" />
                <h3>Premium Materials</h3>
                <p>We source only the highest grade iron and steel from certified mills</p>
              </div>
              <div className="quality-item">
                <img src={facilityImage} alt="Modern Facility" />
                <h3>Modern Facility</h3>
                <p>10,000 sq ft warehouse with climate-controlled storage</p>
              </div>
              <div className="quality-item">
                <img src={teamImage} alt="Expert Team" />
                <h3>Expert Team</h3>
                <p>25+ skilled professionals with metalworking expertise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Range */}
        <div className="product-range">
          <h2>Our Comprehensive Product Range</h2>
          <div className="range-categories">
            <div className="category">
              <h3>Machinery</h3>
              <ul>
                <li>Toka Machines (5 models)</li>
                <li>Hissa Drill Machines</li>
                <li>Industrial Presses</li>
                <li>Metal Cutters</li>
              </ul>
            </div>
            <div className="category">
              <h3>Construction Materials</h3>
              <ul>
                <li>Steel Tubes (15+ sizes)</li>
                <li>Structural Beams</li>
                <li>Reinforcement Bars</li>
                <li>Metal Sheets</li>
              </ul>
            </div>
            <div className="category">
              <h3>Tools & Accessories</h3>
              <ul>
                <li>Haro De Tave Sets</li>
                <li>Professional Tool Kits</li>
                <li>500+ Spare Parts</li>
                <li>Safety Equipment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Promise */}
        <div className="promise-section">
          <h2>Our Customer Promise</h2>
          <div className="promise-items">
            <div className="promise">
              <h3>Quality Guarantee</h3>
              <p>All products come with a minimum 1-year warranty</p>
            </div>
            <div className="promise">
              <h3>Expert Advice</h3>
              <p>Free technical consultation for all customers</p>
            </div>
            <div className="promise">
              <h3>Reliable Delivery</h3>
              <p>On-time delivery with real-time tracking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;