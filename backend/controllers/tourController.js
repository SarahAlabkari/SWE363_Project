const Tour = require('../models/Tour');

// Create a tour
const createTour = async (req, res) => {
  try {
    const {
      tourGuideUsername,
      name,
      date,
      time,
      city,
      location,
      status,
      description,
      eventIds,
      capacity,
      remainingSeats,
      price
    } = req.body;

    if (!tourGuideUsername || !name || !date || !time || !city || !location || !description || !eventIds || !capacity || !price) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const newTour = new Tour({
      tourGuideUsername,
      name,
      date,
      time,
      city,
      location,
      status,
      description,
      eventIds,
      capacity,
      remainingSeats: remainingSeats ?? capacity,
      price
    });

    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error creating tour.' });
  }
};

// Get tours by guide username
const getToursByGuide = async (req, res) => {
  try {
    const { username } = req.params;

    // Case-insensitive, exact match with RegExp
    const tours = await Tour.find({
      tourGuideUsername: { $regex: new RegExp(`^${username.trim()}$`, 'i') }
    });

    if (tours.length === 0) {
      return res.status(404).json({ message: 'No tours found for this guide.' });
    }

    res.status(200).json(tours);
  } catch (err) {
    console.error('❌ Error in getToursByGuide:', err);
    res.status(500).json({ message: 'Server error retrieving tours.' });
  }
};



// ✅ Export both functions
module.exports = {
  createTour,
  getToursByGuide
};
