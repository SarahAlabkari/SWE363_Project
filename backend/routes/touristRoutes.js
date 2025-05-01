const express = require('express');
const router = express.Router();

const {
  createTourist,
  getTourists,
  loginTourist
} = require('../controllers/touristController');


router.post('/login', loginTourist);

// POST /api/tourists
router.post('/', createTourist);

// GET /api/tourists
router.get('/', getTourists);

module.exports = router;
