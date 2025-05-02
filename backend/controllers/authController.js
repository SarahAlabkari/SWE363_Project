// Path: backend/controllers/authController.js

const bcrypt = require('bcryptjs'); // Needed to compare hashed passwords

const Admin = require('../models/Admin');
const Tourist = require('../models/Tourist');
const Guide = require('../models/Guide');
const Provider = require('../models/Provider');

// ---------------------------------------------
// @desc    Unified login controller for all user roles
// @route   POST /api/auth/login
// ---------------------------------------------
const login = async (req, res) => {
  const { identifier, password } = req.body; // identifier can be either username or email

  if (!identifier || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Helper function to check if the identifier matches a user and compare passwords securely
  const tryMatch = async (Model, fields, role) => {
    const query = fields.map(field => ({ [field]: identifier }));
    const user = await Model.findOne({ $or: query });

    if (!user) return { match: false };

    // Compare the hashed password with the raw input using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return { match: true, role };
    }

    return { match: false };
  };

  // Attempt to match each user type
  const checks = [
    await tryMatch(Admin, ['username', 'email'], 'admin'),
    await tryMatch(Tourist, ['username', 'email'], 'tourist'),
    await tryMatch(Guide, ['username', 'email'], 'guide'),
    await tryMatch(Provider, ['email'], 'provider') // Provider uses only email for login
  ];

  // Find the first successful match
  const result = checks.find(r => r.match);

  if (result) {
    return res.status(200).json({
      message: 'Login successful',
      role: result.role
    });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { login };
