import type { Request } from "express";
import type {
  ICharacterRepository,
  ICharacterRequests,
} from "./repository/character.interface";

import { NotFound } from "@root/src/utils/http.exceptions";

export const getByNameCase = async (
  req: Request,
  requests: ICharacterRequests,
  repository: ICharacterRepository
) => {
  const { name } = requests.getRequestToFindByName(req);

  const character = await repository.findByName(name);

  if (character === null) {
    throw new NotFound("Character not found!");
  }

  return {
    pubId: character.pubId,
    level: character.level,
    charName: character.charName,
    className: character.className,
  };
};
