// backend/controllers/tourController.js

const Tour = require('../models/Tour');

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

    // Basic validation
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
      remainingSeats: remainingSeats ?? capacity, // default to full if not provided
      price
    });

    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error creating tour.' });
  }
};

module.exports = {
  createTour
};
