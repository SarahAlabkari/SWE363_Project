const Guide = require('../models/Guide');

const createGuide = async (req, res) => {
  try {
    const { name, email, bio, phone } = req.body;
    const guide = await Guide.create({ name, email, bio, phone });
    res.status(201).json(guide);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createGuide, getGuides };
