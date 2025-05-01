// Path: backend/models/Tourist.js

const mongoose = require('mongoose');

const touristSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

const Tourist = mongoose.model('Tourist', touristSchema);
module.exports = Tourist;
