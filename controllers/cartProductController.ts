import express from 'express';
import CartProduct from '../models/CartProduct';

const router = express.Router();

// Endpoint to create a new cart product
router.post('/cartProducts', async (req, res) => {
    try {
        const newCartProduct = new CartProduct(req.body);
        const savedCartProduct = await newCartProduct.save();
        res.status(201).json(savedCartProduct);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint to get all cart products
router.get('/cartProducts', async (req, res) => {
    try {
        const cartProducts = await CartProduct.find();
        res.json(cartProducts);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Other cart product-related endpoints can be added as needed

export default router;
