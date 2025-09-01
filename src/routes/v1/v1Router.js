import express from 'express';

import userRouter from './users.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: '✨ Api routing is up and running smoothly ✅'
  });
});

router.use('/users', userRouter);

export default router;
