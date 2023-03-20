import { Router } from "express";
import {
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
} from "../controllers/status.controller";

export const routes = Router();

routes.get("/status/:id", getStatusById);

routes.post("/status", createStatus);

routes.patch("/status", updateStatus);

routes.delete("/status", deleteStatus);
