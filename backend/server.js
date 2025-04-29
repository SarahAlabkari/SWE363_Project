const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
const touristRoutes = require('./routes/touristRoutes');
app.use('/api/tourists', touristRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('🚀 Backend server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🟢 Server running on port ${PORT}`));
