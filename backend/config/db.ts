import mongoose from "mongoose"

// const url: any = process.env.MONGO_URL
const url = "mongodb+srv://phuc1234:Wo123456@proshop.bg6jr.mongodb.net/hitachi"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
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