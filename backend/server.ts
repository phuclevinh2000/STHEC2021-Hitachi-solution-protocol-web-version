import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import products from './data/products';
import cargotery from './data/cargotery';

import productRoutes from "./routes/productRoutes"

dotenv.config();

// console.log(process.env.MONGO_URL)
connectDB()

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.use('/api', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
