import mongoose from 'mongoose';

import { NODE_ENV } from './serverConfig.js';
import { MONGODB_URL_DEV } from './serverConfig.js';
import { MONGODB_URL_PROD } from './serverConfig.js';

const connectDB = async () => {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(MONGODB_URL_DEV);
    } else {
      await mongoose.connect(MONGODB_URL_PROD);
    }
    console.log(`🟢 MongoDB successfully connected (${NODE_ENV} environment)`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
