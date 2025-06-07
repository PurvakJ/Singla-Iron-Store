import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/toka-machine.avif';
import product1 from '../assets/toka-machine.avif';
import product2 from '../assets/steel-tube.avif';
import product3 from '../assets/haro-de-tave.avif';
import product4 from '../assets/hissa-drill.jpg';
import product5 from '../assets/spare-partss.jpg'
import product6 from '../assets/vaccum.jpg';
import aboutImage from '../assets/aata-machine.jpg';

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: "Industrial Toka Machine",
      price: "₹12,500 - ₹25,000",
      image: product1,
      discount: "10% OFF",
      description: "Heavy-duty machine for all your iron shaping needs"
    },
    {
      id: 2,
      name: "Galvanized Steel Tube Pipe",
      price: "₹450 - ₹850/meter",
      image: product2,
      discount: "5% OFF",
      description: "Various diameters available for construction"
    },
    {
      id: 3,
      name: "Haro De Tave Set",
      price: "₹8,750 - ₹15,000",
      image: product3,
      description: "Complete set for professional metal work"
    },
    {
      id: 4,
      name: "Hissa Drill Machine",
      price: "₹6,200 - ₹12,500",
      image: product4,
      description: "Precision drilling for metal surfaces"
    },
    {
      id: 5,
      name: "Spare Parts Collection",
      price: "₹200 - ₹5,000",
      image: product5,
      description: "All essential replacement parts"
    },
    {
      id: 6,
      name: "Industrial Vacuum Cleaner",
      price: "₹9,800 - ₹18,500",
      image: product6,
      description: "Heavy-duty cleaning for metal workshops"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Metal Workshop Owner",
      text: "The Toka machine I bought has transformed my production capacity. Excellent quality and service!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Construction Contractor",
      text: "Their steel pipes are the most durable I've found. Reliable supplier for all my projects.",
      rating: 4
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Industrial Engineer",
      text: "Consistent quality across all products. My go-to store for all iron tools and equipment.",
      rating: 5
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Satisfied Customers" },
    { value: "100+", label: "Product Varieties" },
    { value: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Premium Iron Tools & Equipment</h1>
          <p className="subtitle">Industrial-grade quality for professionals and businesses</p>
          <div className="hero-buttons">
            <button className="cta-primary" onClick={() => navigate('/products')}>Explore Products</button>
            <button className="cta-secondary" onClick={() => navigate('/contact')}>Get Consultation</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Our Featured Products</h2>
          <p className="section-subtitle">Trusted by professionals across industries</p>
        </div>
        <div className="products-container">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.discount && <span className="discount-badge">{product.discount}</span>}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="price">{product.price}</p>
                <button className="view-details" onClick={() => navigate('/products')}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
            <div className="about-image">
            <img src={aboutImage} alt="Our Store" />
            </div>

            <div className="about-content">
            <h2>About Our Iron Store</h2>
            <p>
                Founded in 2008, we've grown from a small local shop to one of the region's
                leading suppliers of industrial iron products and tools.
            </p>
            <ul>
                <li>15+ years of industry experience</li>
                <li>Quality certified products</li>
                <li>Expert technical support</li>
                <li>Competitive wholesale prices</li>
                <li>On-site delivery available</li>
            </ul>
            <button className="cta-primary" onClick={() => navigate('/about')}>Our Full Story</button>
            </div>
        </div>
    </section>



      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by professionals across industries</p>
        </div>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Upgrade Your Tools?</h2>
          <p>Contact us today for bulk orders and professional consultation</p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={() => navigate('/contact')}>Get in Touch</button>
            <button className="cta-secondary">Call: +91 83605-29428</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;