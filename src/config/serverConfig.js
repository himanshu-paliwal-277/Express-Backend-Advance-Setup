import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const MONGODB_URL_DEV = process.env.MONGODB_URL_DEV;
export const MONGODB_URL_PROD = process.env.MONGODB_URL_PROD;
export const JWT_SECRET = process.env.JWT_SECRET; 
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';
