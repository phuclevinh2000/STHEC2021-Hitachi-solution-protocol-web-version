import express from 'express';
import { getProductById, getProducts } from '../controllers/productController';
import { getCartgotery } from '../controllers/cartegoryController';
const router = express.Router();

router.route('/products').get(getProducts)
router.route('/products/:id').get(getProductById)
router.route('/cargotery').get(getCartgotery)

export default router;
