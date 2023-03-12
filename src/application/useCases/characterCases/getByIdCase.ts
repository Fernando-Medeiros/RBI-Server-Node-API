import type { Request } from "express";
import type {
  ICharacterRepository,
  ICharacterRequests,
} from "./repository/character.interface";

import { NotFound } from "@root/src/utils/http.exceptions";

export const getByIdCase = async (
  req: Request,
  requests: ICharacterRequests,
  repository: ICharacterRepository
) => {
  const { id } = requests.getRequestToFindById(req);

  const character = await repository.findById(id);

  if (character === null) {
    throw new NotFound("Character not found!");
  }

  delete character?._id;

  return character;
};