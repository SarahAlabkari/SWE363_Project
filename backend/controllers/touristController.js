// Path: backend/controllers/touristController.js

const Tourist = require('../models/Tourist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc    Create a new tourist with validation 
const createTourist = async (req, res) => {
  try {
    const { username, email, password, fullName, phoneNumber } = req.body;

    // Check that all fields are provided
    if (!username || !email || !password || !fullName || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // hashing password 


    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the tourist to the database without confirmPassword and without hashing the password
    const tourist = await Tourist.create({
      username,
      email,
      password: hashedPassword,
      fullName,
      phoneNumber
    });

    res.status(201).json(tourist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Tourist login
const loginTourist = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for required fields
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the tourist by email
    const tourist = await Tourist.findOne({ email });
    if (!tourist) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password with hashed version
    const isMatch = await bcrypt.compare(password, tourist.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Success
    // Generate JWT token
    const token = jwt.sign(
      { id: tourist._id },
      process.env.JWT_SECRET || 'fallbacksecret',
      { expiresIn: process.env.JWT_EXPIRES_IN || '3d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      tourist: {
        id: tourist._id,
        username: tourist.username,
        email: tourist.email,
        fullName: tourist.fullName,
        phoneNumber: tourist.phoneNumber
      }
    });


  } catch (err) {
    res.status(500).json({ message: err.message });
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


module.exports = { loginTourist, createTourist, getTourists };
