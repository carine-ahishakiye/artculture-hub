import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtistProfile from './pages/ArtistProfile';
import ProductCustomization from './pages/ProductCustomization';
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage'; // Import ShopPage
import AboutPage from './pages/AboutPage'; // Import AboutPage

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Add Navbar here */}
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist/:id" element={<ArtistProfile />} />
            <Route path="/customize/:productId" element={<ProductCustomization />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/shop" element={<ShopPage />} /> {/* Add ShopPage route */}
            <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
