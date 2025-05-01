// Path: backend/controllers/adminController.js

const Admin = require('../models/Admin');

// @desc    Authenticate admin using username/email with plain-text password match
const loginAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Look for admin by username and email
    const admin = await Admin.findOne({ username, email });

    // If not found or password doesn't match, reject login
    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If matched, send success
    res.status(200).json({ message: 'Login successful', admin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { loginAdmin };
