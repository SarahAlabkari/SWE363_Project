const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  guideId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Guide'
  },
  date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Tour', tourSchema);
