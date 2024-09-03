import express from 'express';
const router = express.Router();
import Product from '../models/products.mjs'; 
import db from './db/conn.mjs';

// I - Index    GET (all)   READ - display a list of elements
router.get('/', async (req, res) => {
    try {
        const foundProducts = await Product.find({});
        res.status(200).render('products/Index', { products: foundProducts });
    } catch (e) {
        res.status(400).send(e);
    }
});

// N - New      GET         CREATE - (a) this is a view that allows user input
router.get('/new', (req, res) => {
    res.render('products/New');
});

// D - Delete   DELETE      DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).redirect('/products');
    } catch (e) {
        res.status(400).send(e);
    }
});

// U - Update   PUT/PATCH   UPDATE - (b) this updates our database
router.put('/:id', async (req, res) => {
    if (req.body.readyToOrder === 'on') {
        req.body.readyToOrder = true;
    } else {
        req.body.readyToOrder = false;
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/products/${req.params.id}`);
    } catch (e) {
        res.status(400).send(e);
    }
});

// C - Create   POST        CREATE - (a) this adds to our database
router.post('/', async (req, res) => {
    if (req.body.readyToOrder === 'on') {
        req.body.readyToOrder = true;
    } else {
        req.body.readyToOrder = false;
    }

    try {
        const createdProduct = await Product.create(req.body);
        res.status(200).redirect('/products');
    } catch (e) {
        res.status(400).send(e);
    }
});

// E - Edit     GET         UPDATE - (b) but this allows for the user input
router.get("/:id/edit", async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.id);
        res.status(200).render('products/Edit', { product: foundProduct });
    } catch (e) {
        res.status(400).send(e);
    }
});

// S - Show     GET         READ - display a specific element
router.get('/:id', async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.id);
        res.render('products/Show', { product: foundProduct });
    } catch (e) {
        res.status(400).send(e);
    }
});

export default router;
