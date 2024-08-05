// src/Components/Navbar.js
import React from 'react';
import '../Components/NavBar.css';

const Navbar = ({ theme, toggleTheme, onLogout, cartItems=[] }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyApp</h1>
      <div className="navbar-buttons">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <div className="cart-dropdown">
          <button className="cart-btn">
            Cart ({cartItems.length})
          </button>
          <div className="cart-dropdown-content">
            {cartItems.length > 0 ? (
              <>
                <h4>Added Products</h4>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <span className="cart-item-name">{item.name}</span>
                      <span className="cart-item-price">{item.price}</span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="cart-item">Your cart is empty</div>
            )}
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
