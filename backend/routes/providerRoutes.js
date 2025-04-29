const express = require('express');
const router = express.Router();
const { createProvider, getProviders } = require('../controllers/providerController');

router.post('/', createProvider);
router.get('/', getProviders);

module.exports = router;
