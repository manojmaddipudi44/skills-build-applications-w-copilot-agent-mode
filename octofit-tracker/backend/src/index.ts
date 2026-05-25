import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Express = express();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Basic Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'OctoFit Tracker API' });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker backend server running on http://localhost:${PORT}`);
});
