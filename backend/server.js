const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Import routes
const touristRoutes = require('./routes/touristRoutes');
const guideRoutes = require('./routes/guideRoutes');
const providerRoutes = require('./routes/providerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cityRoutes = require('./routes/cityRoutes');





dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/tourists', touristRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/cities', cityRoutes);



app.get('/', (req, res) => {
  res.send('🚀 Backend server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🟢 Server running on port ${PORT}`));
