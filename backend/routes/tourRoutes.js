const express = require('express');
const router = express.Router();
const { createTour, getToursByGuide } = require('../controllers/tourController');

router.post('/create', createTour);
router.get('/guide/:username', getToursByGuide); // 👈 add this line

module.exports = router;
