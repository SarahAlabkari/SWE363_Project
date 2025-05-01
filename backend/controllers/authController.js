// Path: backend/controllers/authController.js

const Admin = require('../models/Admin');
const Tourist = require('../models/Tourist');
const Guide = require('../models/Guide');
const Provider = require('../models/Provider');

// @desc    Unified login controller for all user roles
const login = async (req, res) => {
  const { identifier, password } = req.body; // identifier = username or email

  if (!identifier || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Helper to try matching a user in a model
  const tryMatch = async (Model, fields, role) => {
    const query = fields.map(field => ({ [field]: identifier }));
    const user = await Model.findOne({ $or: query });
    if (user && user.password === password) {
      return { match: true, role };
    }
    return { match: false };
  };

  const checks = [
    await tryMatch(Admin, ['username', 'email'], 'admin'),
    await tryMatch(Tourist, ['username', 'email'], 'tourist'),
    await tryMatch(Guide, ['username', 'email'], 'guide'),
    await tryMatch(Provider, ['email'], 'provider') // Provider logs in using email only
  ];

  const result = checks.find(r => r.match);

  if (result) {
    return res.status(200).json({ message: 'Login successful', role: result.role });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { login };
