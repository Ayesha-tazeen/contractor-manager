import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  getDashboard,
  createProject,
  monthlyReport
} from "../controllers/clientController.js";

const router = express.Router();

router.get("/dashboard", protect, getDashboard);
router.post("/create-project", protect, createProject);
router.get("/monthly-report", protect, monthlyReport);

export default router;