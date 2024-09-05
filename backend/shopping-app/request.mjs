import dotenv from 'dotenv';
dotenv.config();

const apiUrl = process.env.REACT_APP_API_URL;

fetch(`${apiUrl}/api/products`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching products:', error));
