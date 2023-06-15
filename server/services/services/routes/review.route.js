import express from "express";
import {getReviews} from "../controllers/review.controller.js";

const router = express.Router();

router.get("/allReviews", getReviews);

export default router;