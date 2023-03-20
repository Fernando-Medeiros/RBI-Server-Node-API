import type { Request, Response } from "express";
import { EquipmentHandler as handler } from "../handlers/equipment.handler";
import {
  StatusCreated,
  StatusOK,
  StatusOkNoContent,
} from "@src/utils/http.protocols";

export const getEquipmentById = async (req: Request, res: Response) => {
  const equipments = await handler.getEquipmentById(req);

  return new StatusOK(res, equipments);
};

export const createEquipment = async (req: Request, res: Response) => {
  await handler.createEquipment(req);

  return new StatusCreated(res);
};

export const updateEquipment = async (req: Request, res: Response) => {
  await handler.updateEquipment(req);

  return new StatusOkNoContent(res);
};

export const deleteEquipment = async (req: Request, res: Response) => {
  await handler.deleteEquipment(req);

  return new StatusOkNoContent(res);
};
