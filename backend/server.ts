import express, { Application, Request, Response, NextFunction, Errback } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import { errorHandler, notFound } from './middleware/errorMiddleware';

dotenv.config();

// console.log(process.env.MONGO_URL)
connectDB()

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.use('/api', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
