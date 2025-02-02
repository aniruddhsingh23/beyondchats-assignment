import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import scrapingRoutes from './routes/scrapingRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/scraping', scrapingRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
