// Path: backend/controllers/providerController.js

const Provider = require('../models/Provider');
const bcrypt = require('bcryptjs');

// @desc    Create a new provider with hashed password
const createProvider = async (req, res) => {
  try {
    const { companyName, email, password, maaroofNumber, phoneNumber } = req.body;

    // Validate required fields
    if (!companyName || !email || !password || !maaroofNumber || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash the password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create provider with hashed password
    const provider = await Provider.create({
      companyName,
      email,
      password: hashedPassword,
      maaroofNumber,
      phoneNumber
    });

    res.status(201).json(provider);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Get all providers
const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createProvider, getProviders };
