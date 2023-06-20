import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//Localhost
app.listen(8800, () => {
  connect();
  console.log("Running");
})