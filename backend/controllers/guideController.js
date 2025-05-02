const Guide = require('../models/Guide');
const Tour = require('../models/Tour');
const mongoose = require('mongoose');

// ---------------------------------------------
// @desc    Create a new guide
// @route   POST /api/guides
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
// @desc    Get top 3 attended tours for a guide
// @route   GET /api/guides/top-tours/:guideId
// ---------------------------------------------
const getTopAttendedTours = async (req, res) => {
  const { guideId } = req.params;

  try {
    const topTours = await Tour.aggregate([
      { $match: { guideId: new mongoose.Types.ObjectId(guideId) } },
      {
        $group: {
          _id: "$title",
          attendees: { $sum: "$attendees" }
        }
      },
      { $sort: { attendees: -1 } },
      { $limit: 3 },
      {
        $project: {
          _id: 0,
          title: "$_id",
          attendees: 1
        }
      }
    ]);

    res.json(topTours);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch top attended tours' });
  }
};

// ---------------------------------------------
// Placeholder implementations if not already defined
// ---------------------------------------------
const getGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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

const getTourStatistics = async (req, res) => {
  // This is expected to already exist.
  res.status(501).json({ message: "getTourStatistics not yet implemented" });
};

module.exports = {
  createGuide,
  getGuides,
  getEarningYears,
  getMonthlyEarnings,
  getTourStatistics,
  getTopAttendedTours
};
