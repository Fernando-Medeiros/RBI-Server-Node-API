import type { Request } from "express";
import type {
  ICharacterRepository,
  ICharacterRequests,
} from "./repository/character.interface";

import { BadRequest, NotFound } from "@root/src/utils/http.exceptions";

export const updateCase = async (
  req: Request,
  requests: ICharacterRequests,
  repository: ICharacterRepository
) => {
  const { sub } = req.headers;

  const toUpdate = requests.getRequestToUpdate(req);

  const nameExists = toUpdate?.charName
    ? await repository.findByName(toUpdate.charName)
    : null;

  if (nameExists != null) {
    throw new BadRequest("Character name is already in use!");
  }

  const result = await repository.findByIdAndUpdate(sub as string, toUpdate);

  if (result === null) {
    throw new NotFound("Character not found!");
  }
};
