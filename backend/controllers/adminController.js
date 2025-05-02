// Path: backend/controllers/adminController.js

const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

// @desc    Authenticate admin using username/email with hashed password match
const loginAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Look for admin by username and email
    const admin = await Admin.findOne({ username, email });

    // If not found or password doesn't match, reject login
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If matched, send success
    res.status(200).json({ message: 'Login successful', admin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { loginAdmin };
