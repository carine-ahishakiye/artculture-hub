import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AboutPage.css';

// Testimonial component with image avatars and a modern box-style design
const Testimonial = ({ quote, name, role, image }) => (
  <div className="testimonial-card">
    <div className="testimonial-image">
      <img src={image} alt={name} />
    </div>
    <div className="testimonial-content">
      <p className="testimonial-quote">"{quote}"</p>
      <h4 className="testimonial-author">
        - {name}, <span className="testimonial-role">{role}</span>
      </h4>
    </div>
  </div>
);

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Our Story Section */}
      <section className="about-section box-style fade-in">
        <h2 className="section-title">Our Story</h2>
        <p className="section-text">
          ArtCulture-hub was founded with the aim to revolutionize the art industry by connecting artists directly to consumers.
          We are passionate about bringing the world of art closer to you by offering a curated selection of unique and beautiful pieces.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-section box-style fade-in delay-1">
        <h2 className="section-title">Vision & Mission</h2>
        <p className="section-text">
          Our mission is to empower artists by providing a platform to showcase and sell their work globally.
          Our vision is to make art accessible to everyone, fostering a global community of art lovers and creators.
        </p>
      </section>

      {/* Founder Section */}
      <section className="about-section box-style fade-in delay-2">
        <h2 className="section-title">Meet the Founder</h2>
        <p className="section-text">
          ArtCulture-hub was founded by Carine, an art enthusiast committed to supporting artists and democratizing art access.
          With extensive experience in the art industry, Carine envisioned a space where talent meets appreciation.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section box-style fade-in delay-3">
        <h2 className="section-title">Why Choose Us</h2>
        <ul className="features-list">
          <li>Exclusive partnerships with emerging and established artists</li>
          <li>Unique art curation and a wide selection of styles</li>
          <li>User-friendly platform with secure checkout and payment options</li>
          <li>Dedicated support and guidance for both artists and buyers</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="about-section testimonials-section fade-in delay-4">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-container">
          <Testimonial
            quote="CULTURA has transformed the way I experience art. The platform is intuitive and filled with inspiring pieces."
            name="Jane Doe"
            role="Artist"
            image="https://via.placeholder.com/100"
          />
          <Testimonial
            quote="I found the perfect painting for my home through CULTURA. The experience was seamless and the artwork is stunning."
            name="John Smith"
            role="Customer"
            image="https://via.placeholder.com/100"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
