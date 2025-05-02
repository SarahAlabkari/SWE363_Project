const Activity = require('../models/Activity');

// @desc Get all activities with provider info
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().populate('provider');
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create a new activity
const createActivity = async (req, res) => {
  try {
    const {
      provider,
      eventName,
      description,
      image,
      capacity,
      remainingSeats,
      location,
      time,
      date,
      region,
      venue,
      price,
      gender,
      cityName
    } = req.body;

    const activity = await Activity.create({
      provider,
      eventName,
      description,
      image,
      capacity,
      remainingSeats,
      location,
      time,
      date,
      region,
      venue,
      price,
      gender,
      cityName
    });

    res.status(201).json(activity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getActivities, createActivity };
