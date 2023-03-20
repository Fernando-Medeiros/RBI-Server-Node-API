import type { Request, Response } from "express";
import { InventoryHandler as handler } from "../handlers/inventory.handler";
import {
  StatusCreated,
  StatusOK,
  StatusOkNoContent,
} from "@src/utils/http.protocols";

export const getInventoryById = async (req: Request, res: Response) => {
  const inventory = await handler.getInventoryById(req);

  return new StatusOK(res, inventory);
};

export const createInventory = async (req: Request, res: Response) => {
  await handler.createInventory(req);

  return new StatusCreated(res);
};

export const updateInventory = async (req: Request, res: Response) => {
  await handler.updateInventory(req);

  return new StatusOkNoContent(res);
};

export const deleteInventory = async (req: Request, res: Response) => {
  await handler.deleteInventory(req);

  return new StatusOkNoContent(res);
};
