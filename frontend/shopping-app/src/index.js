import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

export const Navbar = styled.nav`
    /* Your styles here */
`;

export const NavLink = styled(Link)`
    /* Your styles here */
`;

export const Bars = styled.div`
    /* Your styles here */
`;

export const NavMenu = styled.div`
    /* Your styles here */
`;

export const NavBtn = styled.div`
    /* Your styles here */
`;

export const NavBtnLink = styled(Link)`
    /* Your styles here */
`;

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
