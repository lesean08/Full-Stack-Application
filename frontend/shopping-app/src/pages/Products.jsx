import React, { useState } from 'react';
import axios from 'axios';
import facialSerumImg from '../assets/facial_serum.jpg';
import hairSerumImg from '../assets/hair_serum.jpg';
import oliveOilSoapImg from '../assets/olive_oil_soap.jpg';
import turmericSoapImg from '../assets/turmeric_soap.jpg';

// Initial products data
const initialProducts = [
  {
    name: "Facial Serum",
    image: facialSerumImg,
    price: 25.0,
    description: "Our Facial Serum is made with all Organic and Natural ingredients. Rids wrinkles, facial lines, dark spots, restores natural moisture."
  },
  {
    name: "Hair Serum",
    image: hairSerumImg,
    price: 18.0,
    description: "Want something to get your hair back to your natural pattern? This Hair Serum will definitely do the trick. One of our top-selling items. Made with all Organic and Natural ingredients."
  },
  {
    name: "Olive Oil Soap",
    image: oliveOilSoapImg,
    price: 6.0,
    description: "Great soap for removing make-up. It is also a great moisturizing soap, keeping your skin moisturized and healthy. Made with all Organic and Natural ingredients."
  },
  {
    name: "Turmeric Soap",
    image: turmericSoapImg,
    price: 12.0,
    description: "This soap is amazing! Gives you a youthful and glowing skin. Brightens skin, rids dark spots, moisturizes, and much more!"
  }
];

function Products() {
    const [products, setProducts] = useState(initialProducts);

   const getProducts = () => {
        axios.get(process.env.REACT_APP_API_URL) 
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setProducts(initialProducts); 
            });
    };

    return (
        <div className="background1">
            <button onClick={getProducts} style={{ marginBottom: '20px' }}>Get Products</button>
            <h1>Products</h1>
            <div className="products-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.name} className="product-item">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available. Click "Get Products" to load.</p>
                )}
            </div>
        </div>
    );
}

export default Products;
