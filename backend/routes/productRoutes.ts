import express, { Router } from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Cargotery from '../models/cargoteryModel';
import Product from '../models/productModel';

// @desc  Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/cargotery',
  asyncHandler(async (req, res) => {
    const cargotery = await Cargotery.find({});
    res.json(cargotery);
  })
);

router.get(
  '/products/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;