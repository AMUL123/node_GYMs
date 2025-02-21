const express = require('express');
const router = express.Router();

const MenuItem= require('./../models/MenuItem');
const { route } = require('./personRoutes');


router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newMenuItem = new MenuItem(data); // ✅ Using MenuItem model

        const response = await newMenuItem.save();
        console.log('MenuItem saved:', response);
        res.status(201).json(response); // ✅ 201 status for resource creation
    }
    catch (err) {
        console.error('Error saving MenuItem:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find(); // ✅ Using MenuItem model
        console.log('MenuItems retrieved:', data);
        res.status(200).json(data);
    }
    catch (err) {
        console.error('Error retrieving MenuItems:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports=router;