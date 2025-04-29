const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  services: { type: String },
  phone: { type: String }
});

const Provider = mongoose.model('Provider', providerSchema);
module.exports = Provider;
