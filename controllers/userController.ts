import express from 'express';
import User from '../models/User';

const router = express.Router();

// Endpoint to create a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
