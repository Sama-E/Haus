import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";


dotenv.config();

const app = express();

app.listen(8800, () => {
  connect();
  console.log("Running");
})