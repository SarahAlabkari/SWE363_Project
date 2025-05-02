const express = require('express');
const router = express.Router();

const {
  createTourist,
  getTourists,
  loginTourist, 
  getTouristPlan, 
  addToPlan, 
  removeActivityFromPlan
} = require('../controllers/touristController');


router.post('/login', loginTourist);

// POST /api/tourists
router.post('/', createTourist);

// GET /api/tourists
router.get('/', getTourists);

 // Add to plan
router.post('/:id/add-plan', addToPlan);

// View plan
router.get('/:id/myplan', getTouristPlan); 

// Remove activity from plan

router.delete('/:id/myplan/:activityId', removeActivityFromPlan);


module.exports = router;
