import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use("/api/users", userRoutes);

app.listen(8800, () => {
  connect();
  console.log("Running");
})