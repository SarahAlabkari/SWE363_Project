const mongoose = require('mongoose');

const touristSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  }
});

const Tourist = mongoose.model('Tourist', touristSchema);
module.exports = Tourist;
