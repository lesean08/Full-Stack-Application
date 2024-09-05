import express from 'express';
import Product from '../models/products.mjs';

const router = express.Router();

// Index: GET all products
router.get('/', async (req, res) => {
    try {
        const foundProducts = await Product.find({});
        res.status(200).render('products/Index', { products: foundProducts });
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    }
});

// New: GET form to create a new product
router.get('/new', (req, res) => {
    res.render('products/New');
});

// Delete: DELETE a product by ID
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).redirect('/products');
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    }
});

// Update: PUT to update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/products/${req.params.id}`);
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    }
});

// Create: POST a new product
router.post('/', async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(200).redirect('/products');
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    }
});

// Edit: GET form to edit a product by ID
router.get('/:id/edit', async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.id);
        res.status(200).render('products/Edit', { product: foundProduct });
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    }
});

// Show: GET a specific product by ID
router.get('/:id', async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.id);
        res.render('products/Show', { product: foundProduct });
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message);
    }
});

export default router;
