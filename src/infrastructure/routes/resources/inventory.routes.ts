import { Router } from "express";
import {
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory.controller";

export const routes = Router();

routes.get("/inventories/:id", getInventoryById);

routes.post("/inventories", createInventory);

routes.patch("/inventories", updateInventory);

routes.delete("/inventories", deleteInventory);
