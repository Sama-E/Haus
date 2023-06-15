import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";
import orderRoutes from "./routes/order.route.js";

dotenv.config();

const app = express();

app.use("/api/orders", orderRoutes);

app.listen(8802, () => {
  connect();
  console.log("Running");
})