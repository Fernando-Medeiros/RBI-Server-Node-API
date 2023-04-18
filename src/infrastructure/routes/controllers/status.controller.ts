import type { Request, Response } from "express";
import { StatusHandler as handler } from "../handlers/status.handler";
import {
  StatusCreated,
  StatusOK,
  StatusOkNoContent,
} from "utils/http.protocols";

export const getStatusById = async (req: Request, res: Response) => {
  const status = await handler.getStatusById(req);

  return new StatusOK(res, status);
};

export const createStatus = async (req: Request, res: Response) => {
  await handler.createStatus(req);

  return new StatusCreated(res);
};

export const updateStatus = async (req: Request, res: Response) => {
  await handler.updateStatus(req);

  return new StatusOkNoContent(res);
};

export const deleteStatus = async (req: Request, res: Response) => {
  await handler.deleteStatus(req);

  return new StatusOkNoContent(res);
};
