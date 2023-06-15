import express from "express";
import {getConversations} from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/allConversations", getConversations);

export default router;