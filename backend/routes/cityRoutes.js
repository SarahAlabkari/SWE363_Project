const express = require('express');
const router = express.Router();
const City = require('../models/City');

// GET city by name (case-insensitive, trims spaces)
router.get('/:name', async (req, res) => {
  try {
    const rawName = req.params.name.trim();
    const city = await City.findOne({
      name: { $regex: `^${rawName}$`, $options: 'i' } // exact match, case-insensitive
    });

    if (!city) return res.status(404).json({ error: 'City not found' });
    res.json(city);
  } catch (err) {
    console.error("City fetch error:", err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;
