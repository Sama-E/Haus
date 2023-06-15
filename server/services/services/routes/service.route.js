import express from "express";
import {getServices} from "../controllers/service.controller.js";

const router = express.Router();

router.get("/allServices", getServices);

export default router;