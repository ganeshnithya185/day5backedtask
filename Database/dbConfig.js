import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGOOSECONNECTIONSTRING;
    await mongoose
      .connect(mongoURL)
      .then(() => console.log("Connected to Mongodb"));

  
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
