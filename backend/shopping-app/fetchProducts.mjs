import axios from 'axios';


db.getCollection('Products').find({});

async function fetchProducts() {

    try {
        const response = await axios.get("http://localhost:3000/Products");
        const { products } = response.data;
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export default fetchProducts;

