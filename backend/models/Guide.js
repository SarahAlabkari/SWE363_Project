const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  phone: { type: String }
});

const Guide = mongoose.model('Guide', guideSchema);
module.exports = Guide;
