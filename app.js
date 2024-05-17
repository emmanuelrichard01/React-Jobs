// Step 1: Install dependencies
// Run: npm install express

// Step 2: Create an Express application
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;
app.use(cors());

// Step 3: Read the JSON file and parse its contents
import jobs from './src/jobs.json' assert { type: 'json' };

// Step 4: Define routes to handle HTTP requests
// Route to get all jobs
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

// Route to get a specific job by ID
app.get('/api/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const job = jobs.find((job) => job.id === jobId);
  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }
  res.json(job);
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
