import jwt from "jsonwebtoken"
import asyncHandler from 'express-async-handler';
import User from "../models/userModel"
import { NextFunction } from "express";

const protect = async (req: any, res: any, next: NextFunction) => {
  let token

  console.log(req.headers.authorization)

  next()
}

export { protect}