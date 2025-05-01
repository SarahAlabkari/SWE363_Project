const express = require('express');
const router = express.Router();
const {
  getActivities,
  createActivity
} = require('../controllers/activityController');

// GET /api/activities
router.get('/', getActivities);

// POST /api/activities
router.post('/', createActivity);

module.exports = router;
