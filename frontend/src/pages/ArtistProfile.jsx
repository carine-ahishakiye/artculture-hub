import React from 'react';
import { useParams } from 'react-router-dom';

const ArtistProfile = () => {
  const { id } = useParams();

  // Sample static content; in a real app, fetch artist details using the id.
  return (
    <div className="artist-profile">
      <h1>Artist Profile: {id}</h1>
      <p>This is the artist's detailed profile page.</p>
      {/* More details such as biography, artworks, etc. */}
    </div>
  );
};

export default ArtistProfile;
