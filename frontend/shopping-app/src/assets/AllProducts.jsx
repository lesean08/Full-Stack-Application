import React from 'react';
import facialSerumImg from './assets/facial_serum.jpg';
import hairSerumImg from './assets/hair_serum.jpg';
import oliveOilSoapImg from './assets/olive_oil_soap.jpg';
import turmericSoapImg from './assets/turmeric_soap.jpg';

const AllProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Facial Serum',
      image: facialSerumImg,
      price: 25.0,
      description: 'Our Facial Serum is made with all Organic and Natural ingredients. Rids wrinkles, facial lines, dark spots, restores natural moisture.'
    },
    {
      id: 2,
      name: 'Hair Serum',
      image: hairSerumImg,
      price: 18.0,
      description: 'What something to get your hair back to your natural pattern. This Hair Serum will definitely do the trick. One of our top selling items. Made with all Organic and Natural ingredients.'
    },
    {
      id: 3,
      name: 'Olive Oil Soap',
      image: oliveOilSoapImg,
      price: 6.0,
      description: 'Great soap for removing make-up. It is also a great moisturizing soap, keeping your skin moisturized and healthy. Made with all Organic and Natural ingredients.'
    },
    {
      id: 4,
      name: 'Turmeric Soap',
      image: turmericSoapImg,
      price: 12.0,
      description: 'This soap is so amazing! Gives you a youthful and grateful glow. Brightens skin, rids dark spots, moisturizes, and much more!'
    },
  ];

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
