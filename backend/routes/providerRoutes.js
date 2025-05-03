// Path: backend/routes/providerRoutes.js

const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');
const {
  createProvider,
  getProviders,
  updateProviderStatus,
  deleteProvider
} = require('../controllers/providerController');

// 📦 Create a new provider
router.post('/', createProvider);

// 📄 Get all providers
router.get('/', getProviders);

// ⚙️ Admin user management
router.patch('/:id/status', updateProviderStatus);
router.delete('/:id', deleteProvider);

// 🔍 Get provider by company name (moved last to avoid conflicts)
router.get('/by-company/:companyName', async (req, res) => {
  try {
    const provider = await Provider.findOne({ companyName: req.params.companyName });
    if (!provider) return res.status(404).json({ message: 'Provider not found' });
    res.json(provider);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
