const express = require('express');
const router = express.Router();
const { createGuide, getGuides } = require('../controllers/guideController');

router.post('/', createGuide);
router.get('/', getGuides);

module.exports = router;
