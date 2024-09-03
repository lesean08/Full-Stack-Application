import express from 'express';
import mongoose from 'mongoose';
//import cors from 'cors';
import dotenv from 'dotenv';
import productsRoutes from './controllers/products.mjs';
import products from './models/prodcuts.mjs';
import products from '.db/products.mjs';

dotenv.config();

const app = express();
//app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware for static files 
app.use(express.static('public'));

// Route definitions
app.use('/api/products', productsRoutes);

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to My Natural Skin and Hair Products");
});

// Global error handling after the routes
app.use((err, _req, res, next) => {
    res.status(500).send('Seems like we messed up somewhere');
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
