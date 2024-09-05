import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Axios from 'axios'; 
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
//import { AllProducts1 } from './components/AllProducts1'; 
import EnrollForm from './components/EnrollForm';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './style.css'; 
//import AllProducts1 from './components/AllProducts1';
//`import Nav from './components/Nav';

const App = () => {
  const [data, setData] = useState(null); 

  const getData = async () => {
    try {
      const response = await Axios.get("REACT_APP_API_URL}");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Navbar />
      <div>
        <h1>Natural Skin and Hair</h1>
        {data && <div>{JSON.stringify(data)}</div>}
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
