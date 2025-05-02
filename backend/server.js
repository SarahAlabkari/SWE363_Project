const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');








const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route imports
const touristRoutes = require('./routes/touristRoutes');
const guideRoutes = require('./routes/guideRoutes');
const providerRoutes = require('./routes/providerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const tourRoutes = require('./routes/tourRoutes'); // ✅ ADD THIS

const cityRoutes = require('./routes/cityRoutes');
const guideProfileRoutes = require('./routes/guideProfileRoutes');

// Use routes
app.use('/api/tourists', touristRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/providers', providerRoutes);
<<<<<<< HEAD
app.use('/api/admin', adminRoutes);
=======

app.use('/api/cities', cityRoutes);
app.use('/api/guideProfile', guideProfileRoutes);

const guideReviewsRoutes = require('./routes/guideReviewsRoutes');
app.use('/api/guideReviews', guideReviewsRoutes);


app.use('/api/admin', adminRoutes); // Use singular `/admin`
>>>>>>> a6c4c7fa5238975a688531ca8502acf0eb50a6c4
app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes); // ✅ ADD THIS

// Health check route
app.get('/', (req, res) => {
  res.send('🚀 Backend server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🟢 Server running on port ${PORT}`));
