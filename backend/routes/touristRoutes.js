const express = require('express');
const router = express.Router();
const { addToPlan } = require('../controllers/touristController');

const {
  createTourist,
  getTourists,
  loginTourist, 
  getTouristPlan, 
  addToPlan
} = require('../controllers/touristController');


router.post('/login', loginTourist);

// POST /api/tourists
router.post('/', createTourist);

// GET /api/tourists
router.get('/', getTourists);

 // Add to plan
router.post('/:id/add-plan', addToPlan);

// View plan
router.get('/:id/plan', getTouristPlan); 

module.exports = router;
