import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// Initialize the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with Auth0Provider 
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-mf6lqfng.us.auth0.com'
      clientId='5c1HQIOd6HlVEi2CLLfTPO7HCImJ9qZr'
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


