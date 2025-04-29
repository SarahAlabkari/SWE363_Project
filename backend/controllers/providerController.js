const Provider = require('../models/Provider');

const createProvider = async (req, res) => {
  try {
    const { name, email, services, phone } = req.body;
    const provider = await Provider.create({ name, email, services, phone });
    res.status(201).json(provider);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createProvider, getProviders };
