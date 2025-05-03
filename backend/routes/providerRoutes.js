// Path: backend/routes/providerRoutes.js

const express = require('express');
const router = express.Router();
const { deleteProvider, updateProviderStatus, createProvider, getProviders } = require('../controllers/providerController');

// POST /api/providers
router.post('/', createProvider);

// GET /api/providers
router.get('/', getProviders);

//user management
router.patch('/:id/status', updateProviderStatus);
router.delete('/:id', deleteProvider);

module.exports = router;
