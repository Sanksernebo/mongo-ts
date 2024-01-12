import express from 'express';
import Product from '../models/Product';

const router = express.Router();

// Endpoint to create a new product
router.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Other product-related endpoints can be added as needed

export default router;
