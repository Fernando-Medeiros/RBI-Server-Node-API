import type { Request, Response } from "express";
import { SkillsHandler as handler } from "../handlers/skills.handler";
import {
  StatusCreated,
  StatusOK,
  StatusOkNoContent,
} from "@src/utils/http.protocols";

export const getSkillsById = async (req: Request, res: Response) => {
  const skills = await handler.getSkillsById(req);

  return new StatusOK(res, skills);
};

export const createSkills = async (req: Request, res: Response) => {
  await handler.createSkills(req);

  return new StatusCreated(res);
};

export const updateSkills = async (req: Request, res: Response) => {
  await handler.updateSkills(req);

  return new StatusOkNoContent(res);
};

export const deleteSkills = async (req: Request, res: Response) => {
  await handler.deleteSkills(req);

  return new StatusOkNoContent(res);
};