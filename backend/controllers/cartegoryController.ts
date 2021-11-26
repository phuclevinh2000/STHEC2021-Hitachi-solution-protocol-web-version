import Cargotery from '../models/cargoteryModel';
import asyncHandler from 'express-async-handler';

const getCartgotery = asyncHandler(async (req, res) => {
  const cargotery = await Cargotery.find({});
  res.json(cargotery);
})

export {
  getCartgotery
}