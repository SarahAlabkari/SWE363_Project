// Path: backend/routes/guideRoutes.js

const express = require('express');
const router = express.Router();
const { createGuide, getGuides } = require('../controllers/guideController');

// POST /api/guides
router.post('/', createGuide);

// GET /api/guides
router.get('/', getGuides);

module.exports = router;
