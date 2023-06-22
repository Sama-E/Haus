import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

//Middleware
app.use(cors( { Origin:"https://localhost:5173", credentials: true } ));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//Global Errors Middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

//Localhost
app.listen(8800, () => {
  connect();
  console.log("Running");
})