import type { ICharacterRepository } from "./repository/character.repository.interfaces";
import type { ICharacterRequestsToFindByName } from "./repository/character.requests.interfaces";

import { NotFound } from "@src/utils/http.exceptions";

export const getByNameCase = async (
  requests: ICharacterRequestsToFindByName,
  repository: ICharacterRepository
) => {
  const { name } = requests.getRequestToFindByName();

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
