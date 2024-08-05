// src/Components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'iPhone 12',
    description: '5G speed. A14 Bionic. Super Retina XDR display.',
    image: 'link-to-iphone-12-image',
  },
  {
    id: 2,
    name: 'iPhone 12 Pro',
    description: 'Pro camera system. 5G speed. A14 Bionic.',
    image: 'link-to-iphone-12-pro-image',
  },
  {
    id: 3,
    name: 'iPhone 11',
    description: 'Dual-camera system. Night mode. 6.1-inch Liquid Retina display.',
    image: 'link-to-iphone-11-image',
  },
  {
    id: 4,
    name: 'iPhone SE',
    description: 'A13 Bionic chip. Portrait mode. 4.7-inch Retina HD display.',
    image: 'link-to-iphone-se-image',
  },
  {
    id: 5,
    name: 'iPhone XR',
    description: 'Liquid Retina display. Face ID. A12 Bionic chip.',
    image: 'link-to-iphone-xr-image',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
