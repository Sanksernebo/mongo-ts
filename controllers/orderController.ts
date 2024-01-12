import express from 'express';
import Order from '../models/Order';

const router = express.Router();

// Endpoint to create a new order
router.post('/orders', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint to get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Other order-related endpoints can be added as needed

export default router;
