const express = require('express');
const router = express.Router();

const {
    getActivities,
    createActivity,
    getActivityById
  } = require('../controllers/activityController');
  

// GET /api/activities
router.get('/', getActivities);

// POST /api/activities
router.post('/', createActivity);

router.get('/:id', getActivityById);


module.exports = router;
