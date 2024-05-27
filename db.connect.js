import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prakash11141:angryme@cluster0.fbsm3wg.mongodb.net/netflix?retryWrites=true&w=majority"
    );
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("DB CONNECTION FAILED");
    console.log(error.message);
  }
};
export default connectDB;
