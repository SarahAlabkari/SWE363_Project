const express = require('express');
const router = express.Router();
const {
  createTourist,
  getTourists
} = require('../controllers/touristController');

// POST /api/tourists
router.post('/', createTourist);

// GET /api/tourists
router.get('/', getTourists);

module.exports = router;
