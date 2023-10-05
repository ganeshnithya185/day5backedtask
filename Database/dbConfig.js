import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGOOSECONNECTIONSTRING;
    const connection = await mongoose.connect(mongoURL);

    return connection;
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
