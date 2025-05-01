// Path: backend/controllers/providerController.js

const Provider = require('../models/Provider');

// @desc    Create a new provider (no hashing, no saving confirmPassword)
const createProvider = async (req, res) => {
  try {
    const { companyName, email, password, maaroofNumber, phoneNumber } = req.body;

    // Basic field validation
    if (!companyName || !email || !password  || !maaroofNumber || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save without hashing or confirmPassword
    const provider = await Provider.create({
      companyName,
      email,
      password,
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
