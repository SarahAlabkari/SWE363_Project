const express = require('express');
const router = express.Router();
const { createTour, getToursByGuide, getTourById } = require('../controllers/tourController');

router.post('/create', createTour);
router.get('/guide/:username', getToursByGuide); 
router.get('/:id', getTourById);

module.exports = router;
