// Path: backend/controllers/guideController.js

const Guide = require('../models/Guide');

// @desc    Create a new guide (without hashing password, and excluding confirmPassword)
const createGuide = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, nationalId, phoneNumber } = req.body;

    // Validate all required fields
    if (!username || !email || !password  || !firstName || !lastName || !nationalId || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save guide without confirmPassword, and password is NOT hashed
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

// @desc    Get all registered guides
const getGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createGuide, getGuides };
