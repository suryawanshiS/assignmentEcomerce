// src/Components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ cartItems }) => {
  const { id } = useParams();
  const product = cartItems.find(item => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container my-5">
      <h2>Product Details</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
