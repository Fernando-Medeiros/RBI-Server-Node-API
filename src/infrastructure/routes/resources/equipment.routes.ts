import { Router } from "express";
import {
  getEquipmentById,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from "../controllers/equipment.controller";

export const routes = Router();

routes.get("/equipments/:id", getEquipmentById);

routes.post("/equipments", createEquipment);

routes.patch("/equipments", updateEquipment);

routes.delete("/equipments", deleteEquipment);
