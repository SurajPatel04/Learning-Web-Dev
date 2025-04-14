const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Connection Error: ", error);
  }
};

module.exports = connectMongoDB;
