const express = require('express');
const router = express.Router();
const { createTour } = require('../controllers/tourController');

router.post('/create', createTour);

module.exports = router;
