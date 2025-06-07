import React from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';
import product1 from '../assets/toka-machine.avif';
import product2 from '../assets/steel-tube.avif';
import product3 from '../assets/haro-de-tave.avif';
import product4 from '../assets/hissa-drill.jpg';
import product5 from '../assets/spare-partss.jpg';
import product6 from '../assets/vaccum.jpg';
import product7 from '../assets/aata-machine.jpg';
import product8 from '../assets/car-washer.webp';

const Products = () => {
  const industrialProducts = [
    {
      id: 1,
      name: "Toka Machine",
      price: "₹12,500",
      originalPrice: "₹13,888",
      image: product1,
      discount: "10% OFF",
      description: "Heavy-duty industrial machine for metal fabrication with precision cutting and durable construction.",
      details: [
        {label: "Power", value: "2.5HP motor"},
        {label: "Weight", value: "85kg"},
        {label: "Warranty", value: "1 Year"}
      ]
    },
    {
      id: 2,
      name: "Steel Tube Pipe",
      price: "₹450/meter",
      originalPrice: "₹475/meter",
      image: product2,
      discount: "5% OFF",
      description: "High-grade steel pipes suitable for construction and industrial applications. Available in various diameters.",
      details: [
        {label: "Material", value: "Carbon Steel"},
        {label: "Thickness", value: "2-10mm options"},
        {label: "Finish", value: "Galvanized"}
      ]
    },
    {
      id: 3,
      name: "Haro De Tave",
      price: "₹8,750",
      originalPrice: "₹9,200",
      image: product3,
      description: "Industrial-grade metal bending tool with adjustable settings for precise angles and curves.",
      details: [
        {label: "Capacity", value: "Up to 6mm thickness"},
        {label: "Length", value: "1.2m working area"},
        {label: "Warranty", value: "6 Months"}
      ]
    },
    {
      id: 4,
      name: "Hissa Drill",
      price: "₹6,200",
      originalPrice: "₹6,800",
      image: product4,
      description: "Heavy-duty drill machine with variable speed control and multiple torque settings.",
      details: [
        {label: "Power", value: "800W"},
        {label: "Chuck Size", value: "13mm"},
        {label: "Warranty", value: "1 Year"}
      ]
    },
    {
      id: 5,
      name: "Spare Parts",
      price: "₹200 - ₹5,000",
      image: product5,
      description: "Comprehensive range of industrial machine spare parts and components for various equipment.",
      details: [
        {label: "Compatibility", value: "Multiple brands"},
        {label: "Material", value: "Steel/Alloy"},
        {label: "Availability", value: "In stock"}
      ]
    },
    {
      id: 6,
      name: "Industrial Vacuum",
      price: "₹9,800",
      originalPrice: "₹10,500",
      image: product6,
      description: "Heavy-duty vacuum cleaner for industrial use with HEPA filtration and large capacity tank.",
      details: [
        {label: "Power", value: "2000W"},
        {label: "Capacity", value: "20L"},
        {label: "Warranty", value: "2 Years"}
      ]
    },
    {
      id: 7,
      name: "Aata Machine",
      price: "₹15,000",
      originalPrice: "₹16,500",
      image: product7,
      description: "Commercial flour mill machine with stainless steel body and high grinding capacity.",
      details: [
        {label: "Capacity", value: "10kg/hour"},
        {label: "Motor", value: "1HP"},
        {label: "Warranty", value: "1 Year"}
      ]
    },
    {
      id: 8,
      name: "Car Washer",
      price: "₹22,500",
      originalPrice: "₹24,800",
      image: product8,
      description: "High-pressure car washing machine with adjustable nozzle and durable construction.",
      details: [
        {label: "Pressure", value: "1500 PSI"},
        {label: "Flow Rate", value: "6L/min"},
        {label: "Warranty", value: "18 Months"}
      ]
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Industrial Equipment & Tools</h1>
          <p className="subtitle">Premium quality iron products and machinery for professional and industrial use</p>
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <h2>Industrial Machinery</h2>
          <p className="section-subtitle">Heavy-duty equipment built for performance and durability</p>
        </div>
        <div className="products-container">
          {industrialProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              discount={product.discount}
              description={product.description}
              details={product.details}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;