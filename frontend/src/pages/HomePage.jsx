import React, { useEffect, useState } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  // State to hold the featured artists data
  const [featuredArtists, setFeaturedArtists] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/featured-artists')
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setFeaturedArtists(data)) // Update state with fetched data
      .catch((error) => console.error('Error fetching data:', error)); // Handle errors
  }, []); // Empty dependency array to fetch once when component mounts

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Discover Art & Culture</h1>
          <p className="hero-subheading">
            Explore unique pieces created by talented artists from across the globe.
            Embrace creativity and culture in every corner.
          </p>
          <button className="explore-btn">Explore Our Collection</button>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2 className="section-heading">Featured Artists</h2>
        <p className="section-description">
          Meet the creative minds behind our curated collection of art and design.
        </p>

        <div className="artist-cards-container">
          {featuredArtists.length > 0 ? (
            featuredArtists.map((artist) => (
              <div key={artist.id} className="artist-card">
                <div className="artist-card-header">
                  <span className="artist-card-dot red"></span>
                  <span className="artist-card-dot yellow"></span>
                  <span className="artist-card-dot green"></span>
                </div>
                <img src={artist.image} alt={artist.name} className="artist-card-image" />
                <div className="artist-card-content">
                  <h3 className="artist-card-name">{artist.name}</h3>
                  <p className="artist-card-description">{artist.description}</p>
                  <button className="view-profile-btn">View Profile</button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading artists...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
