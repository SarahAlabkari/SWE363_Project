// Path: backend/models/Guide.js

const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  username:     { type: String, required: true, unique: true },
  email:        { type: String, required: true, unique: true },
  password:     { type: String, required: true }, // plain text for now
  firstName:    { type: String, required: true },
  lastName:     { type: String, required: true },
  nationalId:   { type: String, required: true },
  phoneNumber:  { type: String, required: true }
});

const Guide = mongoose.model('Guide', guideSchema);
module.exports = Guide;
