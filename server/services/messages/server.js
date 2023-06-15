import express from "express";
import dotenv from 'dotenv';
import connect from "../auth/db.js";
import conversationRoutes from "./routes/conversation.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

app.use("/api/conversations", conversationRoutes);

app.use("/api/messages", messageRoutes);

app.listen(8801, () => {
  connect();
  console.log("Running");
})