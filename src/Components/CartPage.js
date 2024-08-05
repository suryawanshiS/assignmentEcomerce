// src/Components/CartPage.js
import React from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    id: 1,
    name: "iPhone 13",
    description: "The latest iPhone with A15 Bionic chip.",
    price: "$799",
    color: "White",
    image: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg",
  },
  {
    id: 2,
    name: "iPhone 13 pro",
    description: "Still a great choice with A14 Bionic chip.",
    price: "$699",
    color: "Green",
    image: "https://m.media-amazon.com/images/I/315vs3rLEZL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    id: 3,
    name: "iPhone 12",
    description: "A powerful phone with A13 Bionic chip.",
    price: "$599",
    color: "Black",
    image: "https://m.media-amazon.com/images/I/31SOygUjpUL._SY445_SX342_QL70_FMwebp_.jpg",
  },
  {
    id: 4,
    name: "iPhone 12 Mini",
    description: "Affordable and reliable with A12 Bionic chip.",
    price: "$499",
    color: "Black",
    image: "https://m.media-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg",
  },
  {
    id: 5,
    name: "iPhone 11",
    description: "Compact and powerful with A13 Bionic chip.",
    price: "$399",
    color: "Light Black",
    image: "https://m.media-amazon.com/images/I/71i2XhHU3pL._SX679_.jpg",
  },
  {
    id: 6,
    name: "iPhone SE",
    description: "Latest model with advanced features.",
    price: "$999",
    color: "Black",
    image: "https://m.media-amazon.com/images/I/61TOWf11+jL._SX679_.jpg",
  },
];

const CartPage = ({ onAddToCart }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Available iPhones</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
