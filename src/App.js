// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Register from './Components/Register';
// import Login from './Components/Login';
// import CartPage from './Components/CartPage';
// import Navbar from './Components/NavBar';
// import { Modal, Button } from 'react-bootstrap';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [cartItems, setCartItems] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//     document.body.classList.toggle('dark-mode');
//   };

//   const handleLogout = () => {
//     console.log('User logged out');
//   };

//   const onAddToCart = (product) => {
//     setCartItems([...cartItems, product]);
//     setShowModal(true); // Show modal when item is added to cart
//   };

//   const handleCloseModal = () => setShowModal(false);

//   const handleRemoveFromCart = (index) => {
//     setCartItems(cartItems.filter((_, i) => i !== index));
//   };

//   return (
//     <Router>
//       <div className={`App ${theme}`}>
//         <Navbar theme={theme} toggleTheme={toggleTheme} onLogout={handleLogout} cartItems={cartItems} />
//         <Routes>
//           <Route path="/" element={<Navigate to="/register" />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/cart" element={<CartPage onAddToCart={onAddToCart} cartItems={cartItems} />} />
//         </Routes>
//         {/* Modal for displaying cart items */}
//         <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
//           <Modal.Header closeButton>
//             <Modal.Title>Cart Items</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {cartItems.length === 0 ? (
//               <p>Your cart is empty</p>
//             ) : (
//               <div className="cart-items-list">
//                 {cartItems.map((item, index) => (
//                   <div key={index} className="cart-item d-flex align-items-center mb-3">
//                     <img src={item.image} alt={item.name} className="cart-item-image me-3" />
//                     <div className="cart-item-details flex-grow-1">
//                       <h5>{item.name}</h5>
//                       <p>{item.description}</p>
//                       <p><strong>Price:</strong> {item.price}</p>
//                       <p><strong>Color:</strong> {item.color}</p>
//                     </div>
//                     <Button
//                       variant="danger"
//                       onClick={() => handleRemoveFromCart(index)}
//                     >
//                       Remove
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>

//       </div>
//     </Router>
//   );
// };

// export default App;


// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import CartPage from './Components/CartPage';
import Navbar from './Components/NavBar';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [cartItems, setCartItems] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-mode');
  };

  const handleLogout = () => {
    console.log('User logged out');
    // Navigate to the login page (ensure you're using useNavigate in the correct context)
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          onLogout={handleLogout} 
          cartItems={cartItems} 
          onRemoveFromCart={handleRemoveFromCart} 
        />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
