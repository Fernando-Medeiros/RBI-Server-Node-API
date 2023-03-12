import type { Request } from "express";
import type {
  ICharacterRepository,
  ICharacterRequests,
} from "./repository/character.interface";

import { BadRequest } from "@root/src/utils/http.exceptions";

export const createCase = async (
  req: Request,
  requests: ICharacterRequests,
  repository: ICharacterRepository
) => {
  const { sub } = req.headers;

  const dataToCreate = requests.getRequestToCreate(req);

  dataToCreate.pubId = sub as string;

  const nameExists = await repository.findByName(dataToCreate.charName);

  if (nameExists != null) {
    throw new BadRequest("Character name is already in use!");
  }

  await repository.save(dataToCreate);
};
