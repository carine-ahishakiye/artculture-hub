import React from 'react';

const Card = ({ title, description, image, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
