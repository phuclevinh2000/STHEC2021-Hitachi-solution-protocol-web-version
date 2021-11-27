import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
// const url: any = process.env.MONGO_URL

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}`, {
      // useUnifiedTopology:: true, //option to remove warning
    })
    // console.log("hi")

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch(error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB