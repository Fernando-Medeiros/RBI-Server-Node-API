import type { ICharacterRepository } from "./repository/character.repository.interfaces";
import type { ICharacterRequestsToFindById } from "./repository/character.requests.interfaces";

import { NotFound } from "@src/utils/http.exceptions";

export const getByIdCase = async (
  requests: ICharacterRequestsToFindById,
  repository: ICharacterRepository
) => {
  const { id } = requests.getRequestToFindById();

  const character = await repository.findById(id);

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
