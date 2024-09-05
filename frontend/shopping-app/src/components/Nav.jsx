
import React from 'react';
import facialSerumImg from '../assets/facial_serum.jpg';
import hairSerumImg from '../assets/hair_serum.jpg';
import oliveOilSoapImg from '../assets/olive_oil_soap.jpg';
import turmericSoapImg from '../assets/turmeric_soap.jpg';

const Nav = () => {
  return (
    <nav>
      <img src={facialSerumImg} alt="Facial Serum" />
      <img src={hairSerumImg} alt="Hair Serum" />
      <img src={oliveOilSoapImg} alt="Olive Oil Soap" />
      <img src={turmericSoapImg} alt="Turmeric Soap" />
    </nav>
  );
};

export default Nav;
