// Path: backend/controllers/touristController.js

const Tourist = require('../models/Tourist');

// @desc    Create a new tourist with validation (no hashing)
const createTourist = async (req, res) => {
  try {
    const { username, email, password, fullName, phoneNumber } = req.body;

    // Check that all fields are provided
    if (!username || !email || !password || !fullName || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save the tourist to the database without confirmPassword and without hashing the password
    const tourist = await Tourist.create({
      username,
      email,
      password, // password saved as plain text
      fullName,
      phoneNumber
    });

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
