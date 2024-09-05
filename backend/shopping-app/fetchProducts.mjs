import axios from 'axios';


db.getCollection('Products').find({});

async function fetchProducts() {

    try {
        const response = await axios.get("REACT_APP_API_URL=http://localhost:3000");
        const { products } = response.data;
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export default fetchProducts;

