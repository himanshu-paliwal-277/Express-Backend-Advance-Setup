import express from 'express';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRouter.js';

const app = express();

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
