import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './components/Login';
import Nav from './components/Navbar';
import EnrollForm from './components/EnrollForm';
import Cart from './pages/Cart';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <h1>Natural Skin and Hair</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enrollform" element={<EnrollForm />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;


