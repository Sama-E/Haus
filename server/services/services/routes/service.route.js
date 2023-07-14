import express from "express";
import {
  getServices,
  oneService,
  newService,
  deleteService
} from "../controllers/service.controller.js";
import { verifyToken } from "../../../middleware/jwt.js";

const router = express.Router();

router.get("/allservices", getServices);
router.get("/:id", verifyToken, oneService);
router.post("/new", verifyToken, newService);
router.delete("/:id", verifyToken, deleteService);

export default router;