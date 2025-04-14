import mongoose from "mongoose";
import dotenv from "dotenv";
import URL from "./models/url.js";

dotenv.config();
const connectDB = async () => {
  try {
    // short-url is the database name
    await mongoose.connect(`${process.env.MONGODB_URL}/short-url`);
    console.log("Connection is done");
  } catch (error) {
    console.log("Error in Connection: ", error);
  }
};

export default connectDB;
