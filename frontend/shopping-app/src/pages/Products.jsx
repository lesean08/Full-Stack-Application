import React, { useState } from 'react';
import axios from 'axios';

function Products() {
    
    const [products, setProducts] = useState([]);

    
    const getProducts = () => {
        axios.get('http://localhost:300')
            .then(res => {
                
                setProducts(res.data);
                console.log(res.data); 
            })
            .catch(err => {
                console.error(err); 
            });
    };

    return (
        <div className="background1"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh'
            }}
        >
            <button onClick={getProducts} style={{ marginBottom: '20px' }}>Get Products</button>
            <h1>Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products.map(product => (
                    <div key={product.id} style={{ margin: '20px', textAlign: 'center' }}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.title} style={{ width: '200px', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
