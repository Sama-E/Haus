import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

mongoose.set('strictQuery', true);

try {
  await mongoose.connect(process.env.MONGO);
} catch (error) {
  handleError(error);
}

app.listen(8800, () => {
  console.log("Running")
})