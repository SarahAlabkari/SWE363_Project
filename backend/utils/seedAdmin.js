// Path: backend/utils/seedAdmin.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');

// ✅ Load environment variables with full path to .env
dotenv.config({ path: __dirname + '/../.env' });

// ✅ Get MongoDB connection string
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in your .env file');
  process.exit(1);
}

// ✅ Connect to MongoDB and seed admin
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');

    const exists = await Admin.findOne({ username: 'admin' });

    if (!exists) {
      await Admin.create({
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123' // 🔐 You can hash this in production
      });
      console.log('✅ Admin created.');
    } else {
      console.log('⚠️ Admin already exists.');
    }

    process.exit();
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
