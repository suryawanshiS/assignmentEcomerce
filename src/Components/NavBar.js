// // src/Components/Navbar.js
// import React from 'react';
// import '../Components/NavBar.css';

// const Navbar = ({ theme, toggleTheme, onLogout, cartItems=[] }) => {
//   return (
//     <nav className="navbar">
//       <h1 className="navbar-logo">MyApp</h1>
//       <div className="navbar-buttons">
//         <button className="theme-toggle-btn" onClick={toggleTheme}>
//           {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//         </button>
//         <div className="cart-dropdown">
//           <button className="cart-btn">
//             Cart ({cartItems.length})
//           </button>
//           <div className="cart-dropdown-content">
//             {cartItems.length > 0 ? (
//               <>
//                 <h4>Added Products</h4>
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="cart-item">
//                     <img src={item.image} alt={item.name} className="cart-item-image" />
//                     <div className="cart-item-details">
//                       <span className="cart-item-name">{item.name}</span>
//                       <span className="cart-item-price">{item.price}</span>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <div className="cart-item">Your cart is empty</div>
//             )}
//           </div>
//         </div>
//         <button className="logout-btn" onClick={onLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/Components/Navbar.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

const Navbar = ({ theme, toggleTheme, onLogout, cartItems = [], onRemoveFromCart }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">MyApp</h1>
        <div className="navbar-buttons">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button className="cart-btn" onClick={handleShowModal}>
            Cart ({cartItems.length})
          </button>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Cart Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item d-flex mb-3">
                <img src={item.image} alt={item.name} className="cart-item-image mr-3" />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                  <p><strong>Color:</strong> {item.color}</p>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => onRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
