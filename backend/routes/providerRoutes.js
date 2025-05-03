// Path: backend/routes/providerRoutes.js

const express = require('express');
const router = express.Router();
const { createProvider, getProviders } = require('../controllers/providerController');

// POST /api/providers
router.post('/', createProvider);

// GET /api/providers
router.get('/', getProviders);

router.get('/:companyName', async (req, res) => {
    try {
      const provider = await Provider.findOne({ companyName: req.params.companyName });
      if (!provider) return res.status(404).json({ message: 'Provider not found' });
      res.json(provider);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
