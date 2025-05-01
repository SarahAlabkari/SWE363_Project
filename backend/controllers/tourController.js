const Tour = require('../models/Tour');
const Activity = require('../models/Activity'); // ✅ NEW: import activity model

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

// Get tours by guide username (with activity name lookup)
const getToursByGuide = async (req, res) => {
  try {
    const { username } = req.params;

    const tours = await Tour.find({
      tourGuideUsername: { $regex: new RegExp(`^${username.trim()}$`, 'i') }
    });

    if (tours.length === 0) {
      return res.status(404).json({ message: 'No tours found for this guide.' });
    }

    // ✅ Manual lookup of activity names
    const populatedTours = await Promise.all(
      tours.map(async (tour) => {
        const activities = await Activity.find({ _id: { $in: tour.eventIds } });
        const activityNames = activities.map((a) => a.eventName);
        return {
          ...tour.toObject(),
          activityNames, // ✅ add names alongside original data
        };
      })
    );

    res.status(200).json(populatedTours);
  } catch (err) {
    console.error('❌ Error in getToursByGuide:', err);
    res.status(500).json({ message: 'Server error retrieving tours.' });
  }
};

const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json({ message: 'Server error retrieving tour' });
  }
};

module.exports = {
  createTour,
  getToursByGuide,
  getTourById,
};
