const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import routes
const touristRoutes = require('./routes/touristRoutes');
const guideRoutes = require('./routes/guideRoutes');
const providerRoutes = require('./routes/providerRoutes');
const adminRoutes = require('./routes/adminRoutes');



dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Use routes
app.use('/api/tourists', touristRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/admins', adminRoutes);



app.get('/', (req, res) => {
  res.send('🚀 Backend server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🟢 Server running on port ${PORT}`));
