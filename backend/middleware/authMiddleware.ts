import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { NextFunction } from 'express';

type decodedType = {
  id: string;
  iat: number;
  exp: number;
}

const protect = asyncHandler(async (req: any, res: any, next: NextFunction) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]; //take the token

      const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as decodedType;

      req.user = await User.findById(decoded.id).select('-password'); //dont send the password

      // console.log(decoded);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, no token ');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  // next()
});

export { protect };
