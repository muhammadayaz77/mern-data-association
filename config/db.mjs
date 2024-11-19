import mongoose from "mongoose";

let connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_CONN);
    console.log("database connected...");
  } catch (error) {
    console.log(error);
  }
}
export default connectDB;