import type { Request, Response } from "express";
import { CharacterHandler as handler } from "../handlers/character.handler";
import {
  StatusCreated,
  StatusOK,
  StatusOkNoContent,
} from "utils/http.protocols";

export const getAllCharacters = async (_req: Request, res: Response) => {
  const characters = await handler.getAllCharacters();

  return new StatusOK(res, characters);
};

export const getCharacterById = async (req: Request, res: Response) => {
  const character = await handler.getCharacterById(req);

  return new StatusOK(res, character);
};

export const getCharacterByName = async (req: Request, res: Response) => {
  const character = await handler.getCharacterByName(req);

  return new StatusOK(res, character);
};

export const createCharacter = async (req: Request, res: Response) => {
  await handler.createCharacter(req);

  return new StatusCreated(res);
};

export const updateCharacter = async (req: Request, res: Response) => {
  await handler.updateCharacter(req);

  return new StatusOkNoContent(res);
};

export const deleteCharacter = async (req: Request, res: Response) => {
  await handler.deleteCharacter(req);

  return new StatusOkNoContent(res);
};
