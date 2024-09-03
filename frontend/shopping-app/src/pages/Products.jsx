import React from 'react';

function Products() {
    const products = [
        { id: 1, title: 'Hair Serum', description: 'Nourishing hair serum', product_image_url: 'link-to-image' }
    ];

    return (
        <div>
            <div
                className="background1" 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <h1>Products</h1>
            </div>
            {products.map((product) => (
                <div key={product.id} style={{ margin: '20px' }}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <img src={product.product_image_url} alt={product.title} style={{ width: '200px', height: 'auto' }} />
                </div>
            ))}
        </div>
    );
}

export default Products;
