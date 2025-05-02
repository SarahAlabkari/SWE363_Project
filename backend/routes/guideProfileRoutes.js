const express = require('express');
const router = express.Router();
const GuideProfile = require('../models/GuideProfile');

// ✅ GET all guide profiles
router.get('/', async (req, res) => {
  try {
    const guides = await GuideProfile.find();
    res.json(guides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ GET one guide profile by username (case-insensitive)
router.get('/:username', async (req, res) => {
  try {
    const guide = await GuideProfile.findOne({
      username: { $regex: `^${req.params.username}$`, $options: 'i' }
    });

    if (!guide) return res.status(404).json({ message: "Guide not found" });
    res.json(guide);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
