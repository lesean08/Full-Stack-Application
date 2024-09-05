import React, { useState, useEffect } from 'react';
import axios from 'axios';
import facialSerumImg from '../assets/facial_serum.jpg';
import hairSerumImg from '../assets/hair_serum.jpg';
import oliveOilSoapImg from '../assets/olive_oil_soap.jpg';
import turmericSoapImg from '../assets/turmeric_soap.jpg';
import './AllProducts.css';


const AllProducts1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Products') 
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []); 

  return (
    <div className="products-container" style={{ padding: '20px' }}>
      <h1>All Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map(product => (
            <div key={product.id} style={{ margin: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '250px', textAlign: 'center' }}>
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
}

const Nav = () => {
  return (
    <nav>
      <img src={facialSerumImg} alt="Facial Serum" />
      <img src={hairSerumImg} alt="Hair Serum" />
      <img src={oliveOilSoapImg} alt="Olive Oil Soap" />
      <img src={turmericSoapImg} alt="Turmeric Soap" />
    </nav>
  );
}

export { AllProducts1, Nav };

