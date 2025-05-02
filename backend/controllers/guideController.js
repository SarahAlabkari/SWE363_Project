// Path: backend/controllers/guideController.js

const Guide = require('../models/Guide');
const Tour = require('../models/Tour');
const mongoose = require('mongoose');

// ---------------------------------------------
// @desc    Create a new guide
// ---------------------------------------------
const createGuide = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, nationalId, phoneNumber } = req.body;

    if (!username || !email || !password || !firstName || !lastName || !nationalId || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const guide = await Guide.create({
      username,
      email,
      password,
      firstName,
      lastName,
      nationalId,
      phoneNumber
    });

    res.status(201).json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ---------------------------------------------
// @desc    Get all registered guides
// ---------------------------------------------
const getGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ---------------------------------------------
// @desc    Get all years where guide has tours
// @route   GET /api/guides/earnings-years/:guideId
// ---------------------------------------------
const getEarningYears = async (req, res) => {
  const { guideId } = req.params;

  try {
    const years = await Tour.aggregate([
      { $match: { guideId: new mongoose.Types.ObjectId(guideId) } },
      { $group: { _id: { $year: "$date" } } },
      { $sort: { "_id": 1 } }
    ]);

    res.json(years.map(y => y._id.toString()));
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch years" });
  }
};

// ---------------------------------------------
// @desc    Get monthly earnings for a guide in a year
// @route   GET /api/guides/earnings-per-month/:guideId/:year
// ---------------------------------------------
const getMonthlyEarnings = async (req, res) => {
  const { guideId, year } = req.params;

  try {
    const start = new Date(`${year}-01-01`);
    const end = new Date(`${parseInt(year) + 1}-01-01`);

    const result = await Tour.aggregate([
      {
        $match: {
          guideId: new mongoose.Types.ObjectId(guideId),
          date: { $gte: start, $lt: end }
        }
      },
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$price" }
        }
      }
    ]);

    const earnings = Array(12).fill(0);
    result.forEach(({ _id, total }) => {
      earnings[_id - 1] = total;
    });

    res.json(earnings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch monthly earnings" });
  }
};

// ---------------------------------------------
// @desc    Get guide statistics (completed, cancelled, scheduled, attendees)
// @route   GET /api/guides/statistics/:guideId?from=...&to=...
// ---------------------------------------------
const getTourStatistics = async (req, res) => {
  const { guideId } = req.params;
  const { from, to } = req.query;

  try {
    const startDate = new Date(from);
    const endDate = new Date(to);

    const stats = await Tour.aggregate([
      {
        $match: {
          guideId: new mongoose.Types.ObjectId(guideId),
          date: { $gte: startDate, $lte: endDate }
        }
      },
      {
        $group: {
          _id: null,
          completed: {
            $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] }
          },
          cancelled: {
            $sum: { $cond: [{ $eq: ["$status", "cancelled"] }, 1, 0] }
          },
          scheduled: {
            $sum: { $cond: [{ $eq: ["$status", "scheduled"] }, 1, 0] }
          },
          attendees: { $sum: "$attendees" }
        }
      }
    ]);

    res.status(200).json(stats[0] || {
      completed: 0,
      cancelled: 0,
      scheduled: 0,
      attendees: 0
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
};

module.exports = {
  createGuide,
  getGuides,
  getEarningYears,
  getMonthlyEarnings,
  getTourStatistics // new export added for TourStatistics.jsx
};
