// Path: backend/routes/providerRoutes.js

const express = require('express');
const router = express.Router();
const { createProvider, getProviders } = require('../controllers/providerController');

// POST /api/providers
router.post('/', createProvider);

// GET /api/providers
router.get('/', getProviders);

module.exports = router;
