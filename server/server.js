import express from "express";
import dotenv from 'dotenv';
import connect from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./services/auth/routes/user.route.js";
import authRoutes from "./services/auth/routes/auth.route.js";
import serviceRoutes from "./services/services/routes/service.route.js";
import reviewRoutes from "./services/services/routes/review.route.js";

dotenv.config();

const app = express();

//Middleware
app.use(cors({ 
  origin:"https://localhost:5173/", 
  credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/services", serviceRoutes);
app.use("/api/reviews", reviewRoutes);

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