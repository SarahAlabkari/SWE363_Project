// Path: backend/routes/guideRoutes.js

const express = require('express');
const router = express.Router();

// Import all controller functions
const {
  createGuide,
  getGuides,
  getEarningYears,
  getMonthlyEarnings,
  getTourStatistics // ✅ Make sure this is added
} = require('../controllers/guideController');

// Create a new guide
// POST /api/guides
router.post('/', createGuide);

// Get all guides
// GET /api/guides
router.get('/', getGuides);

// Get available years for guide's earnings
// GET /api/guides/earnings-years/:guideId
router.get('/earnings-years/:guideId', getEarningYears);

// Get monthly earnings for a specific year
// GET /api/guides/earnings-per-month/:guideId/:year
router.get('/earnings-per-month/:guideId/:year', getMonthlyEarnings);

// Get tour statistics for a guide within a date range
// GET /api/guides/statistics/:guideId?from=YYYY-MM-DD&to=YYYY-MM-DD
router.get('/statistics/:guideId', getTourStatistics); // ✅ This was missing or undefined

module.exports = router;
