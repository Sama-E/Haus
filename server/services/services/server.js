import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";
import serviceRoutes from "./routes/service.route.js";
import reviewRoutes from "./routes/review.route.js";

dotenv.config();

const app = express();

app.use("/api/services", serviceRoutes);

app.use("/api/reviews", reviewRoutes);

app.listen(8803, () => {
  connect();
  console.log("Running");
})