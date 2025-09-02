import cors from 'cors';
import express from 'express';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRouter.js';

const app = express();

// ✅ Allowed origins (local + deployed)
const allowedOrigins = [
  'http://localhost:5173', // Vite React local
  'https://yourfrontend.com' // Deployed React app
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('❌ Not allowed by CORS'));
      }
    },
    credentials: true // if you're using cookies/auth headers
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: '✨ Welcome! 🚀 Your API is up and running smoothly ✅'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is up and running at: http://localhost:${PORT}`);
  connectDB();
});
