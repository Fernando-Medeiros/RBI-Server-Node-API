import type { Request } from "express";
import type { ICharacterRepository } from "./repository/character.interface";

import { NotFound } from "@root/src/utils/http.exceptions";

export const deleteCase = async (
  req: Request,
  repository: ICharacterRepository
): Promise<void> => {
  const { sub } = req.headers;

  const result = await repository.findByIdAndDelete(sub as string);

  if (result === null) {
    throw new NotFound("Character not found!");
  }
};
