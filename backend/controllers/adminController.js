const Admin = require('../models/Admin');

// Create a new admin
const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.create({ username, password });
    res.status(201).json(admin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createAdmin, getAdmins };
