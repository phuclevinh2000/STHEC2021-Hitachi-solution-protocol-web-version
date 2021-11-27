import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import bcrypt from "bcryptjs"
import express,{ Application, Request, Response, NextFunction, Errback } from "express"

// @desc  Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = (<any>req).body
  const user = await User.findOne({email})
  // console.log(email)
  if(user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      // email: user.email,
      isAdmin: user.isAdmin,
      token: null
    })
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

export { authUser}