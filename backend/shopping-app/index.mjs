import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './controllers/products.mjs';
//import fetchProducts from './fetchProducts.mjs';


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use(express.static('public')); // Middleware for serving static files

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Route definitions
app.use('/api/products', productRoutes);

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to My Natural Skin and Hair Products");
});

// Global error handling
app.use((err, _req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


  
