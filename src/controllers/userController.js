import { signInService, signUpService } from '../services/userService.js';

export const signUp = async (req, res) => {
  try {
    const user = await signUpService(req.body);

    return res.status(201).json({
      message: 'User signed up successfully',
      data: user
    });
  } catch (error) {
    console.log('User controller error', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json({
        message: error.message
      });
    }

    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const response = await signInService(req.body);
    return res.status(200).json({
      message: 'User signed in successfully',
      data: response
    });
  } catch (error) {
    console.log('User controller error', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json({
        message: error.message
      });
    }

    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};
