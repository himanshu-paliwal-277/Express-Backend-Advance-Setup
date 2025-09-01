import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config/serverConfig.js';
import userRepository from '../repositories/userRepository.js';
import {
  customErrorResponse,
  internalErrorResponse
} from '../utils/common/responseObjects.js';

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(403).json(
        customErrorResponse({
          message: 'No auth token provided'
        })
      );
    }

    const response = jwt.verify(token, JWT_SECRET);

    if (!response) {
      return res.status(403).json(
        customErrorResponse({
          explanation: 'Invalid data sent from the client',
          message: 'Invalid auth token provided'
        })
      );
    }

    const user = await userRepository.getById(response.id);
    req.user = user.id;
    next();
  } catch (error) {
    console.log('Auth middleware error', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json(
        customErrorResponse({
          explanation: 'Invalid data sent from the client',
          message: 'Invalid auth token provided'
        })
      );
    }
    return res.status(500).json(internalErrorResponse(error));
  }
};
