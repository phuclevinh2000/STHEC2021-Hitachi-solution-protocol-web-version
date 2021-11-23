import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from './config/db';
import users from './data/user';
import products from './data/products';
import cargotery from './data/cargotery';
import Cargotery from './models/cargoteryModel';
import User from './models/userModel';
import Order from './models/orderModel';
import Product from './models/productModel';

dotenv.config();

connectDB()
// Push data to mongo
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Cargotery.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Cargotery.insertMany(cargotery)
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// Delete data from mongo
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}