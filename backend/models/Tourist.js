const mongoose = require('mongoose');

const touristSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },

  // ➕ Add this new field here:
  plans: [
    {
      activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
      date: String,
      time: String,
      seats: Number,
      status: { type: String, default: 'Pending' }
    }
  ]
});

const Tourist = mongoose.model('Tourist', touristSchema);
module.exports = Tourist;
