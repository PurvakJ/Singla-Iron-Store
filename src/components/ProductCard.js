import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, originalPrice, image, discount, description, details }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <div className="product-header">
          <h3>{name}</h3>
          {discount && <span className="product-discount">{discount}</span>}
        </div>
        <p className="product-description">{description}</p>
        <p className="product-price">
          <span className="price-current">{price}</span>
          {originalPrice && <span className="price-original">{originalPrice}</span>}
        </p>
        <div className="product-extra-details">
          {details && details.map((detail, index) => (
            <p key={index}><strong>{detail.label}:</strong> {detail.value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
