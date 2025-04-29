const Tourist = require('../models/Tourist');

// @desc    Create a new tourist
const createTourist = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const tourist = await Tourist.create({ name, email, phone });
    res.status(201).json(tourist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Get all tourists
const getTourists = async (req, res) => {
  try {
    const tourists = await Tourist.find();
    res.status(200).json(tourists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createTourist, getTourists };
