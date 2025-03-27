import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShopify, FaInfoCircle, FaUserAlt, FaCartPlus, FaBars } from 'react-icons/fa'; // Import only needed icons
import '../styles/Navbar.css'; // Adjust the path to point to the styles directory

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [menuOpen, setMenuOpen] = useState(false); // Manage mobile menu state

  // Simulate checking login status (replace with actual authentication logic)
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('userToken'); // Replace with your auth logic
      setIsLoggedIn(!!loggedIn);
    };
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Branding */}
        <Link to="/" className="navbar-logo">
          CULTURA.
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              <FaHome className="navbar-icon" /> Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/shop" className="navbar-link">
              <FaShopify className="navbar-icon" /> Shop
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              <FaInfoCircle className="navbar-icon" /> About
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="navbar-item">
                <Link to="/account" className="navbar-link">
                  <FaUserAlt className="navbar-icon" /> Account
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/cart" className="navbar-link">
                  <FaCartPlus className="navbar-icon" /> Cart
                </Link>
              </li>
              <li className="navbar-item" onClick={handleLogout}>
                <Link to="/login" className="navbar-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
