// Path: backend/routes/guideRoutes.js

const express = require('express');
const router = express.Router();

// Import guide-related controller functions
const {
  createGuide,
  getGuides,
  getEarningYears,
  getMonthlyEarnings,
  getTourStatistics,
  getTopAttendedTours,
  getGuideDashboardReviews,
  updateGuideStatus,
  deleteGuide
} = require('../controllers/guideController');

// 📦 Create a new guide
router.post('/', createGuide);

// 📄 Get all guides
router.get('/', getGuides);

// 📈 Guide statistics and reports
router.get('/earnings-years/:guideId', getEarningYears);
router.get('/earnings-per-month/:guideId/:year', getMonthlyEarnings);
router.get('/statistics/:guideId', getTourStatistics);
router.get('/top-tours/:guideId', getTopAttendedTours);
router.get('/reviews/:guideId', getGuideDashboardReviews);

// ⚙️ Admin user management
router.patch('/:id/status', updateGuideStatus);
router.delete('/:id', deleteGuide);

// 🔍 Get guide by username (moved last to avoid route conflicts)
router.get('/by-username/:username', async (req, res) => {
  try {
    const guide = await require('../models/Guide').findOne({ username: req.params.username });
    if (!guide) {
      return res.status(404).json({ message: 'Guide not found' });
    }
    res.json(guide);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
