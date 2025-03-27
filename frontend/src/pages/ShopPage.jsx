import React, { useState } from "react";
import '../styles/ShopPage.css'; // Correct the import path based on your structure

// Sample product data
const products = [
  {
    id: 1,
    name: "Landscape Painting",
    category: "Paintings",
    description: "A beautiful landscape painting.",
    price: 150,
    image: "https://via.placeholder.com/200x150?text=Painting",
  },
  {
    id: 2,
    name: "Modern Sculpture",
    category: "Sculptures",
    description: "A contemporary sculpture made of marble.",
    price: 300,
    image: "https://via.placeholder.com/200x150?text=Sculpture",
  },
  {
    id: 3,
    name: "Digital Art Portrait",
    category: "Digital Art",
    description: "A digital portrait of a woman.",
    price: 100,
    image: "https://via.placeholder.com/200x150?text=Digital+Art",
  },
  // Add more products as needed
];

const categories = ["Paintings", "Sculptures", "Digital Art"];
const priceRanges = ["$0 - $100", "$101 - $200", "$201 - $300"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  // Filter products based on selected category and price range
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const priceMatch = !selectedPriceRange || (
      selectedPriceRange === "$0 - $100" && product.price <= 100) ||
      (selectedPriceRange === "$101 - $200" && product.price > 100 && product.price <= 200) ||
      (selectedPriceRange === "$201 - $300" && product.price > 200 && product.price <= 300);

    return categoryMatch && priceMatch;
  });

  return (
    <div className="shop-page">
      <h1>Shop Our Collection</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <h3>Filters</h3>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option value="">All Prices</option>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Product Listings */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Call to Action and Secure Checkout */}
      <div className="cta-section">
        <p>Ready to explore more amazing artwork? Don't miss out on our latest collection!</p>
        <button className="explore-more">Explore More</button>
        <div className="secure-checkout">
          <p>Your checkout process is secure and protected.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
