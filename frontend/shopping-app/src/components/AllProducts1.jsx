import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllProducts.css'; 
//import nav from './componenets/Nav';

const AllProducts1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container" style={{ padding: '20px' }}>
      <h1>All Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map(product => (
            <div key={product._id} style={{ margin: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '250px', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
              <h2 style={{ fontSize: '1.2em' }}>{product.name}</h2>
              <p>{product.description}</p>
              <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts1;

