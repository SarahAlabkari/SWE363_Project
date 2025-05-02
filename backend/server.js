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
app.use('/api/activities', require('./routes/activityRoutes'));


// Route imports
const touristRoutes = require('./routes/touristRoutes');
const guideRoutes = require('./routes/guideRoutes');
const providerRoutes = require('./routes/providerRoutes');
const adminRoutes = require('./routes/adminRoutes'); // Admin route
const activityRoutes = require('./routes/activityRoutes'); // Activity route

const cityRoutes = require('./routes/cityRoutes');
const guideProfileRoutes = require('./routes/guideProfileRoutes');

// Use routes
app.use('/api/tourists', touristRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/providers', providerRoutes);

app.use('/api/cities', cityRoutes);
app.use('/api/guideProfile', guideProfileRoutes);


app.use('/api/admin', adminRoutes); // Use singular `/admin`
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes); // Use singular `/activities`

// Health check route
app.get('/', (req, res) => {
  res.send('🚀 Backend server is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🟢 Server running on port ${PORT}`));

