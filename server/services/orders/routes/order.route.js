import express from "express";
import {getOrders} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/allOrders", getOrders);

export default router;