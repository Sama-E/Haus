import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    handleError(error);
  }
}

export default connect;