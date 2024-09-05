import React from 'react';
//import AllProducts1 from './AllProducts1';


function ProductList() {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

//export default Listings;
